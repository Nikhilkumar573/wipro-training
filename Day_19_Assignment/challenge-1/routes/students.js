
const express = require('express');
const router = express.Router();

let students = [];
let currentId = 1;

// CREATE - POST /students
router.post('/', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: "Name and course are required" });
  }

  const student = { id: currentId++, name, course };
  students.push(student);

  res.status(201).json(student);
});

// READ ALL - GET /students
router.get('/', (req, res) => {
  res.json(students);
});

// READ ONE - GET /students/:id
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.json(student);
});

// UPDATE - PUT /students/:id
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  Object.assign(student, req.body);

  res.json(student);
});

// DELETE - DELETE /students/:id
router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students.splice(index, 1);

  res.json({ message: 'Student deleted successfully' });
});

module.exports = router;

