const http = require("http");

const locate = 'ghaziabad';
const URL = `https://api.github.com/search/users?q=location:${locate}`;
const PORT = 3000;

const app = http.createServer(async (req, res) =>
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        if (res.url == "/") {
            res.end(`<h1>Server is running on port ${PORT}<h1>`);
        }
        else if (req.url == "/users") {
            const data = await fetch(URL);
            const dataJson = await data.json();
            const users = dataJson.items;
            users.map((item) => {
                res.write(`<h2>${item.login}</h2>`);
                res.write(`<img src=${item.avatar_url} width="200">`);
            })
        }
        else {
            res.end("<h2>404 Not Found<h2>");
        }       
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
