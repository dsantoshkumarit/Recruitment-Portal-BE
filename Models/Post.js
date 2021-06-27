const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter" },
  location: { type: String, required: true },
  skills: [{ type: String, required: true }],
  experience: { type: String, required: true },
  salary: { type: String, required: true },
});

module.exports = mongoose.model("Post", postSchema);
