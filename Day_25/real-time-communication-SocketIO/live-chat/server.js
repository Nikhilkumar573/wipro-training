// this file is server.js where we will set up a basic Express server 
//Following steps can be implemented to set up a basic Express server with socket.io integration
//Step1: Import necessary modules
//Step2: Initialize Express app
//Step3: Set up socket.io server
        //Creating a new instance of the socket.io server with CORS settings
        //Connection event listener to handle new client connections
        //Message event listener to handle incoming messages and broadcast them to all connected clients
        //Basic route to test the server
//Step4: Define middleware and routes
//Step5: Start the server
const express = require('express');
const app = express();
const { Server } = require("socket.io"); 

const PORT = process.env.PORT || 3000;


const http = require("http").createServer(app);


const io = new Server(http, {  
    cors: { 
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(express.json());
app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('message', (data) => {
        io.emit('message', data);
    });
});


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
