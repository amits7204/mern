const express = require("express");

const app = express();
const students = require("./student");

app.get("/", (req, res) => {
  res.status(200).json(students);
});

app.listen(8080, () => {
  console.log("the server is up and running");
});
