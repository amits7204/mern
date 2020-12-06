const student = require("../models/students");
const { validationResult } = require("express-validator");

const getStudents = (req, res) => {
  student
    .find()
    .then(() => res.json(res.pagination))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("AAA", { errors: errors.array() });
    return res.status(400).json({ errors: errors.array() });
  }
  const { fname, group, email, city, avatar, gender } = req.body;
  console.log("F name: ", fname, email);
  const newStudent = new student({
    fname,
    group,
    email,
    city,
    avatar,
    gender,
  });
  newStudent
    .save()
    .then(() => res.json("Student Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getStudents, addStudent };
