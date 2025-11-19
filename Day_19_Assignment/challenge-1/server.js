const express = require('express');
const app = express();
const port = 4000;

// Middleware
const logger = require('./middleware/logger');
app.use(logger);
app.use(express.json());

// Import Routes
const bookRoutes = require('./routes/books');

// Default Route
app.get('/', (req, res) => {
  res.send("Welcome to Express Server with Modular Routing!");
});

// Use Book Routes
app.use('/books', bookRoutes);

// ---- Challenge 5 Error Handling ----

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Centralized Error Handler (Bonus)
app.use((err, req, res, next) => {
  console.error(" ERROR:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
