const fs = require("fs").promises;

async function copyFile() {
  try {
    console.log("Starting Async/Await file process...\n");

    
    const data = await fs.readFile("input.txt", "utf-8");
    console.log("File Read Successfully:");
    console.log(data);

    // Bonus: Artificial delay of 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 2: Write content to output file
    await fs.writeFile("output.txt", data);

    // Step 3: Success message
    console.log("\nFile copied successfully using async/await!");

  } catch (error) {
    console.log("Error:", error.message);
  }
}

copyFile();
