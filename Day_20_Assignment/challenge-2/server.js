const express = require("express");
const app = express();
const PORT = 4000;

// Challenge 2: Dynamic Routing
app.get("/courses/:id", (req, res) => {
  const courseId = req.params.id;

  res.json({
    id: courseId,
    name: "React Mastery",
    duration: "6 weeks"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
