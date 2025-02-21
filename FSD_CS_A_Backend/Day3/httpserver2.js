const http = require("http");
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  const data = await fetch("https://dummyjson.com/recipes");
  const dataJson = await data.json();
  const dataArray = dataJson.recipes;
  
  dataArray.map((recipe) => {
    const data = `<h3 style='color: red'> ${recipe.name} </h3>`;
    res.write(data);
  });
  res.end();
});
server.listen(3001, (err) => {
  try {
    if (err) throw err;
  } catch (err) {
    console.log("Server Error", err.message);
  }
});