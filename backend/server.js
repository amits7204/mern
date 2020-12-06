const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentsRoutes = require("./router/student");

dotenv.config();
const app = express();

// const students = require("./models/students");
const cors = require("cors");

app.use(cors());
app.use(express.json());
// console.log("STUDENT ROUTES: ", studentsRoutes);
app.use("/users", studentsRoutes);

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("the database is connected: ", err);
  }
);

// const db = mongoose.connection;
// db.once("open", async () => {
//   if ((await students.countDocuments().exec()) > 0) {
//     return;
//   }
//   students
//     .insertMany(students)
//     .then(() => res.json("users added successfully"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// app.post("/users/add", (req, res) => {
//   const { fname, group, email, city, avatar, gender } = req.body;

//   const newStudent = new students({
//     fname,
//     group,
//     email,
//     city,
//     avatar,
//     gender,
//   });
//   newStudent
//     .save()
//     .then(() => res.json("Student Added Successfully"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// app.get("/users", paginatedResults(students), (req, res) => {
//   res.json(res.pagination);
// });

// function paginatedResults(model) {
//   return async (req, res, next) => {
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);
//     console.log("PAge: ", page);
//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;

//     const results = {};
//     console.log("AWAIT: ", await model.countDocuments().exec());
//     if (endIndex < (await model.countDocuments().exec())) {
//       results.next = {
//         page: page,
//         limit: limit,
//       };
//     }

//     if (startIndex > 0) {
//       results.prev = {
//         page: page - 1,
//         limit: limit,
//       };
//     }
//     results.count = await model.countDocuments().exec();
//     try {
//       results.current = await model.find().limit(limit).skip(startIndex).exec();
//       res.pagination = results;
//       next();
//     } catch (e) {
//       res.status(500).json({ message: e.message });
//     }
//   };
// }

app.listen(8080, () => {
  console.log("server is up and running");
});
