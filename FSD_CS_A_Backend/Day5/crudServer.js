const http = require("http");

const app = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write
    }
})