const express = require("express");
const router = express.Router();
const students = require("../models/students");
const { getStudents, addStudent } = require("../controller/studentcontroller");
const { body } = require("express-validator");

console.log("Student data: ", getStudents);

router.get("/", paginatedResults(students), getStudents);

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    console.log("PAge: ", page);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    console.log("AWAIT: ", await model.countDocuments().exec());
    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }
    results.count = await model.countDocuments().exec();
    try {
      results.current = await model.find().limit(limit).skip(startIndex).exec();
      res.pagination = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
      //   next();
    }
  };
}
router.post(
  "/add",
  [body("email").isEmail(), body("city").isLength({ min: 2 })],
  addStudent
);

module.exports = router;
