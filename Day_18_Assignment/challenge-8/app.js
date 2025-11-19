const fs = require("fs").promises; // using fs.promises

console.log("Starting Promise-based file operation...");

fs.readFile("input.txt", "utf-8")
  .then((data) => {
    console.log("\nFile Read Successfully:");
    console.log(data);

    
    return fs.writeFile("output.txt", data);
  })
  .then(() => {
    console.log("\nFile copied successfully!");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
