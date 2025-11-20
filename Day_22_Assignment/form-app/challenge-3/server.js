const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Database
mongoose.connect("mongodb://localhost:27017/authDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model("User", userSchema);

// Passport Auth Logic
passport.use(new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
        const user = await User.findOne({ email });
        if (!user) return done(null, false);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false);

        return done(null, user);
    }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => done(null, await User.findById(id)));


// Register Route
app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword, role });

    res.send("User registered! <a href='/login.html'>Login</a>");
});


// Login Route
app.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login.html"
}));

// Middleware for Auth
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(" Not logged in");
}

function isAdmin(req, res, next) {
    if (req.user.role === "admin") return next();
    res.send(" Access Denied");
}

// Protected Routes
app.get("/dashboard", isLoggedIn, (req, res) => {
    res.send(`Welcome ${req.user.name}! Role: ${req.user.role}`);
});

app.get("/admin", isLoggedIn, isAdmin, (req, res) => {
    res.send(" Welcome Admin!");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
