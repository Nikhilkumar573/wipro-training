// server.js

const express = require("express");
const rateLimit = require("express-rate-limit");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;


app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});


const limiter = rateLimit({
  windowMs: 60_000, 
  max: 5,
  message: { error: "Too many requests - Try again later" }
});
app.use(limiter);


app.use("/api/v1/students", studentRoutes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.use((err, req, res, next) => {
  console.error("Internal Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () =>
  console.log(` Server running at: http://localhost:${PORT}`)
);

