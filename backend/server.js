const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const students = require("./student");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/users", (req, res) => {
  res.status(200).json(students);
});

app.post("/users/add", (req, res) => {
  const id = uuidv4();
  const fname = req.body.fname;
  const group = req.body.group;
  const city = req.body.city;
  const email = req.body.email;
  const avatar = req.body.avatar;
  const gender = req.body.gender;

  const studentObj = { id, fname, group, email, city, avatar, gender };
  students.push(studentObj);
  res.status(200).json({ message: "Student added successfully" });
});

app.put("/users/update/:id", (req, res) => {
  const id = req.params.id;
  console.log("UPDATE ID: ", id);
  const index = students.findIndex((student) => {
    return student.id == Number.parseInt(id);
  });
  if (index >= 0) {
    const updateStudent = students[index];
    updateStudent.fname = req.body.fname;
    updateStudent.group = req.body.group;
    updateStudent.city = req.body.city;
    updateStudent.email = req.body.email;
    updateStudent.avatar = req.body.avatar;
    updateStudent.gender = req.body.gender;
    res.status(200).json(updateStudent);
  } else {
    res.status(400).json({ error: "updation of student failed" });
  }
});

app.delete("/users/students/:id", (req, res) => {
  const id = req.params.id;
  console.log("ID: ", JSON.stringify(req.body));
  const index = students.findIndex((student) => {
    return student.id == Number.parseInt(id);
  });
  if (index >= 0) {
    const std = students[index];
    students.splice(index, 1);
    res.status(200).json(std);
  } else {
    res.status(404).json({ error: "Error deleting the students" });
  }
});

app.listen(8080, () => {
  console.log("the server is up and running");
});
