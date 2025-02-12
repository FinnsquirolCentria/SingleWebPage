const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        const filePath = path.join(__dirname, "indexAll.html");

        // Debugging: Log the file path to check if it's correct
        console.log("Attempting to read file:", filePath);

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error("Error reading file:", err);  // Log the actual error
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error: Could not read the file");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});