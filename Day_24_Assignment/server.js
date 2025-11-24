const express = require("express");
const http = require("http");
const path = require("path");
const multer = require("multer");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// MULTER SETUP 
const uploadFolder = path.join(__dirname, "uploads");

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder); 
  },
  filename: (req, file, cb) => {
  
    cb(null, Date.now() + "-" + file.originalname);
  },
});


const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });


app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));


app.use("/materials", express.static(uploadFolder));


// Basic route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded or invalid file type");
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});


io.on("connection", (socket) => {
  const username = socket.handshake.query.username || "Guest";
  const role = socket.handshake.query.role || "guest";

  console.log(`User connected: ${username} (${role})`);

 
  io.emit("chatMessage", {
    from: "System",
    role: "system",
    text: `${username} (${role}) joined the chat`,
  });

  // Listen for chat messages
  socket.on("chatMessage", (text) => {
    io.emit("chatMessage", { from: username, role, text });
  });

  // disconnect
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${username} (${role})`);
    io.emit("chatMessage", {
      from: "System",
      role: "system",
      text: `${username} (${role}) left the chat`,
    });
  });
});

// start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
