const http = require("http");
const PORT = 3000;

const data = [
    { 
        id: 1, 
        name: "keshav",  
        email: "keshav@gmail.com"
    },
    { 
        id: 2, 
        name: "kartik",
        email: "kartik@gmail.com"
    },
    {
        id: 3,
        name: "karan",
        email: "karan@gmail.com"
    }
]

const app = http.createServer(async (req, res) =>
    {
        if( req.method == "GET" ) {
            if (res.url == "/") {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(`<h1>Server is running on port ${PORT}<h1>`);
            }
            else if ( req.url == "/users" ) {
                res.writeHead(200, {"Content-Type": "application/json"});
                const userData = data;
                res.write(`${userData}`);
            }
        }
        else {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end("<h2>404 Not Found<h2>");
        }
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
