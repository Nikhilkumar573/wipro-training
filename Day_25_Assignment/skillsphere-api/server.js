const express = require("express");
const app = express();

app.use(express.json());

// Dummy DB
let courses = [{ id: 1, name: "JavaScript", duration: "4 weeks" }];
let users = [{ id: 1, username: "admin", email: "admin@test.com" }];

// Routes
app.get("/api/courses", (req, res) => res.json(courses));

app.post("/api/courses", (req, res) => {
  const course = { id: courses.length + 1, ...req.body };
  courses.push(course);
  res.status(201).json(course);
});

app.get("/api/users", (req, res) => res.json(users));

app.post("/api/users", (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// Deployment Test Route
app.get("/status", (req, res) => res.send("App is live"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; 
