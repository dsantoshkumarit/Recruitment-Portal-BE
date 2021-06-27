const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  appliedPosts: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

module.exports = mongoose.model("Candidate", candidateSchema);
