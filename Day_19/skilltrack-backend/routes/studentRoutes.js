const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

// Routes
router.get("/students", controller.getStudents);
router.get("/students/:id", controller.getStudentById);
router.post("/students", controller.addStudent);
router.put("/students/:id", controller.updateStudent);
router.delete("/students/:id", controller.deleteStudent);

module.exports = router;
