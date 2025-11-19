// Print Node.js version
console.log("Node.js Version:", process.version);

// Print current file name and directory
console.log("Current File:", __filename);
console.log("Current Directory:", __dirname);

// Welcome message every 3 seconds
const intervalId = setInterval(() => {
  console.log("Welcome to Node.js! Learning backend made easy...");
}, 3000);

// Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Timer stopped after 10 seconds.");
}, 10000);

