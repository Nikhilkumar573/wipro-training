const express = require("express");
const app = express();


// Challenge 1: Custom Logging Middleware

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); 
};

app.use(requestLogger);


// Challenge 2: Built-in Middleware for Parsing JSON and Form Data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route for Challenge 2
app.post("/users", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body
  });
});


// Challenge 3: Dynamic Templates Using EJS

app.set("view engine", "ejs");

// Sample course list
const courses = ["JavaScript", "Node.js", "Express.js", "React", "MongoDB"];

// Route to render template with course list
app.get("/courses", (req, res) => {
  res.render("courses", { courses });
});

// Basic home route
app.get("/", (req, res) => {
  res.send("Middleware & Templates Assignment Running ✔");
});


// Start the Server

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
