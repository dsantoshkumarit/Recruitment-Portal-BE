const router = require("express").Router();
const mongoose = require("mongoose");
const Candidate = mongoose.model("Candidate");

//authenticate candidate
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  const candidate = await Candidate.findOne({ email, password });

  if (!candidate) {
    res.status(404).json({ message: "No Such Candidate" });
  }

  res
    .status(200)
    .json({ message: "Candidate logged in successfully", _id: candidate._id });
});

//register candidate
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const candidateExists = await Candidate.findOne({ email, password });

  if (candidateExists) {
    res
      .status(400)
      .json({ message: `Candidate with email ${email} already exists` });
  } else {
    const newCandidate = new Candidate({ name, email, password });
    await newCandidate.save();
    res.status(200).json({
      message: `Candidate with email ${email} registered successfully`,
    });
  }
});

module.exports = router;
