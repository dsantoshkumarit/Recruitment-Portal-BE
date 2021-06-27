const router = require("express").Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

//authenticate recruiter
router.get("/post/getposts", async (req, res) => {
  //   const { email, password } = req.body;
  //   const recruiter = await Recruiter.findOne({ email, password });

  if (!recruiter) {
    res.json({ message: "No Such Recruiter" });
  }

  res.json({ message: "Recruiter logged in successfully" });
});

module.exports = router;
