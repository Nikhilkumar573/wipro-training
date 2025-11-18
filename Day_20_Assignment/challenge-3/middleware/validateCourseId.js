module.exports = (req, res, next) => {
  const { id } = req.params;

  // Check if id is numeric
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }

  next(); 
};
