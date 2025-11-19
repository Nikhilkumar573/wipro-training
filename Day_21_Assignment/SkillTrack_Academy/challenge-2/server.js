const express = require("express");
const app = express();


// Challenge 2: Built-in Body Parsing

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// POST route for /users
app.post("/users", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body
  });
});

// Testing GET route
app.get("/", (req, res) => {
  res.send("Challenge 2 Running ✔");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
