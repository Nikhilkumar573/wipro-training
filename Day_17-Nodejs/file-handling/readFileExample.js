const fs = require('fs').promises;
const path = require('path');

async function readFileExample() {
  try {
    // Create absolute path so Node always finds the file
    const filePath = path.join(__dirname, 'example.txt');
    console.log("Reading file from:", filePath);

    const data = await fs.readFile(filePath, 'utf8');
    console.log("\nFile Content:");
    console.log(data);
  } catch (err) {
    console.error("\nError:", err);
  }
}

readFileExample();
