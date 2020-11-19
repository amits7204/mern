const express = require("express");
const students = require("./student");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json(students);
});

app.post("/api/students/add", (req, res) => {
  const id = uuidv4();
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;

  const studentObj = { id, first_name, last_name, email };
  students.push(studentObj);
  res.status(200).json({ message: "Student added successfully" });
});

app.put("/api/students/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = students.findIndex((student) => {
    return student.id == Number.parseInt(id);
  });
  if (index >= 0) {
    const updateStudent = students[index];
    updateStudent.first_name = req.body.first_name;
    updateStudent.last_name = req.body.last_name;
    updateStudent.email = req.body.email;
    res.status(200).json(updateStudent);
  } else {
    res.status(404).json({ error: "updation of student failed" });
  }
});

/**
 * Deleting a data
 */

app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
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
