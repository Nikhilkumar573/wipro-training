

const { validationResult } = require("express-validator");


let students = [
  { id: 1, name: "Alice", course: "Computer Science" },
  { id: 2, name: "Bob", course: "Artificial Intelligence" }
];

exports.getAllStudents = (req, res) => res.json(students);

exports.getStudentById = (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  return student
    ? res.json(student)
    : res.status(404).json({ error: "Student not found" });
};

exports.createStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    course: req.body.course
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added", student: newStudent });
};

exports.updateStudent = (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Student not found" });

  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  students[index] = {
    id: Number(req.params.id),
    name: req.body.name,
    course: req.body.course
  };

  res.json({ message: "Student updated", student: students[index] });
};

exports.deleteStudent = (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Student not found" });

  students.splice(index, 1);

  res.json({ message: "Student deleted" });
};
