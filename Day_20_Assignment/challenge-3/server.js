const express = require("express");
const app = express();
const PORT = 4000;

// Import Modular Route
const courseRoutes = require("./routes/courses");

// Register Routes
app.use("/courses", courseRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
