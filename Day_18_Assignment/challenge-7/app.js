const fs = require('fs');

console.log(" Starting file read...");

// Using fs.readFile with a callback
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log("Error reading file:", err);
  }

  console.log("\nFile Content:\n", data);

  
  setTimeout(() => {
    console.log("\n Read operation completed!");
  }, 2000);
});

console.log("Code continues without waiting (Non-blocking behavior)\n");
