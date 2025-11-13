
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  const url = req.url; 

  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  if (url === "/") {
    res.write("<h1>Welcome to Node.js Server!</h1>");
  } else if (url === "/about") {
    res.write("<h1>About Page</h1><p>This is a simple Node.js prototype server.</p>");
  } else if (url === "/contact") {
    res.write("<h1>Contact Page</h1><p>Email: support@company.com</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>");
  }

  res.end(); 
});


server.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
