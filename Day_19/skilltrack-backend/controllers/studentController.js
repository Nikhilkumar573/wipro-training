const students = require("../data/students");

// GET all students
exports.getStudents = (req, res) => {
  res.json(students);
};

// GET student by ID
exports.getStudentById = (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
};

// POST new student
exports.addStudent = (req, res) => {
  const { name, skills, course } = req.body;

  if (!name || !skills || !course) {
    return res.status(400).json({
      message: "All fields (name, skills, course) are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    skills,
    course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
};

// UPDATE student
exports.updateStudent = (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, skills, course } = req.body;

  if (name) student.name = name;
  if (skills) student.skills = skills;
  if (course) student.course = course;

  res.json(student);
};

// DELETE student
exports.deleteStudent = (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({ message: "Student deleted successfully" });
};
