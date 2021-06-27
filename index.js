require("./Models/Candidate");
require("./Models/Recruiter");
require("./Models/Post");

const express = require("express");
require("dotenv").config();

const app = express();

app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to mongodb server
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DBURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) =>
    console.log("Mongoose Connection Error(index.js) : ", err.message)
  );

//Create a server
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening at: ${port}`));

//Routing
app.use("/candidate", require("./Routes/Candidate"));
app.use("/recruiter", require("./Routes/Recruiter"));
app.use("/posts", require("./Routes/Posts"));
