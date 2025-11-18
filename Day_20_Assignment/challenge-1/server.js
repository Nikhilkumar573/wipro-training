const express = require("express");
const app = express();
const PORT = 4000;

// Challenge 1: Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
