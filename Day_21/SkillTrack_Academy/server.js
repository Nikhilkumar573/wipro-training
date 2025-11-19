const express = require("express");
const morgan = require("morgan");
const app = express();

// User Story 3: Built-in Body Parsing Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// User Story 1: Request Logging Middleware

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
app.use(requestLogger);


// User Story 4: Morgan Logging Middleware

app.use(morgan("dev"));


// User Story 2: Validation Middleware

const validateStudent = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: "Validation Failed: Name and Email are required."
    });
  }

  next();
};



// Student route (using validation middleware)
app.post("/students", validateStudent, (req, res) => {
  res.json({
    success: true,
    message: "Student data received successfully!",
    data: req.body
  });
});

// Basic home route
app.get("/", (req, res) => {
  res.send("SkillTrack Academy API Running");
});

// User Story 5 Testing Route 
app.get("/error-test", (req, res) => {
  throw new Error("Test error triggered!");
});


// User Story 5: Error Handling Middleware 

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: "Internal Server Error",
    message: err.message
  });
});



app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

