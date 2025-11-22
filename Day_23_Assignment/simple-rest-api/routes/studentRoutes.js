

const express = require("express");
const { body } = require("express-validator");
const studentController = require("../controllers/studentController");

const router = express.Router();

const validateStudent = [
  body("name").notEmpty().withMessage("Student name is required"),
  body("course").notEmpty().withMessage("Course is required")
];

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", validateStudent, studentController.createStudent);
router.put("/:id", validateStudent, studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
