const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/register", (req, res) => {
    const { name, email } = req.body;
    res.send(`Registration successful for ${name} (${email})`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
