// 1 Import Express
const express = require("express");

// 2 Create the app instance
const app = express();

// 3 Define Middleware
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// 4 Register Middleware
app.use(requestLogger);

// 5 Create a test route
app.get("/", (req, res) => {
  res.send("Middleware Working");
});

// 6 Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

