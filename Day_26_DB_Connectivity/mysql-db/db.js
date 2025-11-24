//in db.js we will have our database connection logic followed bt export statements

//step 1: Import the necessary modules
//step 2:Create a connection to the database
//step 3:Export the connection for use in other parts of the application
//step 4:Close the connection when not needed
// in db.js we will have our database connection logic followed by export statements

// Step 1: Import the necessary modules
const mysql = require("mysql2");

// Step 2: Create a connection to the database
const db = mysql.createConnection({
    host: "localhost",            // MySQL Workbench host
    user: "root",                 // Your MySQL username
    password: "root",             // Enter your MySQL Workbench password
    database: "studentsdb"        // Name of your created database
});

// Step 3: Connect to MySQL and handle any connection errors
db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err); // Log connection error
        return;
    }
    console.log("MySQL connected successfully!"); // Success message
});

// Step 4: Export the connection for use in other parts of the application
module.exports = db;
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });  
// const db = mongoose.connection;
// // Handle connection events
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB database successfully');
// });
// module.exports = db;
// Export the connection for use in other parts of the application
// mongoose consot of following methods
// mongoose.connect() - Establishes a connection to the MongoDB database.
// mongoose.model() - Defines a model (schema) for a collection in the database.
// mongoose.disconnect() - Closes the connection to the MongoDB database.
