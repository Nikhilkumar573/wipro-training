import fs from "fs/promises";

// User input
const userInput = "Node.js is awesome!";


async function handleFile() {
  try {
    // Write data to feedback.txt
    await fs.writeFile("feedback.txt", userInput);
    console.log("Data written successfully.");

    // Read the file
    console.log("Reading file...");
    const data = await fs.readFile("feedback.txt", "utf8");

    // Print content
    console.log(data);
  } catch (err) {
    console.error("Error handling file:", err);
  }
}

// Call function
handleFile();
