// Import core modules
const fs = require("fs");
const path = require("path");
const http = require("http");

const logFolder = path.join(__dirname, "logs");

if (!fs.existsSync(logFolder)) {
  fs.mkdirSync(logFolder);
}


const logFile = path.join(logFolder, "app.log");
fs.appendFileSync(logFile, "App started\n");

console.log("Log entry written at:", logFile);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "running" }));
});


server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
