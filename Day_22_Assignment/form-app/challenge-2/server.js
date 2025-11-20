const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// 1 Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/registrationDB")
.then(() => console.log(" MongoDB Connected"))
.catch(err => console.log(" DB Connection Error:", err));

// 2 Create Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// 3 Create Model (Collection: users)
const User = mongoose.model("User", userSchema);

// 4 Handle Form Submission
app.post("/register", async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = new User({ name, email });
        await newUser.save();

        console.log(" Saved to DB:", newUser);
        res.send(" User saved to MongoDB successfully!");
    } catch (err) {
        res.send(" Failed to save");
    }
});

// Start server
app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));
