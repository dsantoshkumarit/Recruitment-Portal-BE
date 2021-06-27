const router = require("express").Router();
const mongoose = require("mongoose");
const Recruiter = mongoose.model("Recruiter");

//authenticate recruiter
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  const recruiter = await Recruiter.findOne({ email, password });

  if (!recruiter) {
    res.status(400).json({ message: "No Such Recruiter" });
  }

  res
    .status(200)
    .json({ message: "Recruiter logged in successfully", _id: recruiter._id });
});

//register recruiter
router.post("/register", async (req, res) => {
  const { name, email, password, company } = req.body;
  const recruiterExists = await Recruiter.findOne({ email, password });

  if (recruiterExists) {
    res
      .status(400)
      .json({ message: `Recruiter with email ${email} already exists` });
  } else {
    const newRecruiter = new Recruiter({ name, email, password, company });
    await newRecruiter.save();
    res.status(200).json({
      message: "Recruiter with email ${email} registered successfully",
    });
  }
});

module.exports = router;
