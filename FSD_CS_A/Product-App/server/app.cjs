const express = require("express")
const app = express();
const port = 3000
const products = [{
    id: 1001,
    title: "laptop",
    brand: "Hp",
    price: 52000,
    quantity: 5
},
{
    id: 1002,
    title: "laptop",
    brand: "Hp",
    price: 62000,
    quantity: 2
}
]
app.get("/products", (req, res) => {
    res.status(200);
    res.json(products);
})
app.post("/createproduct", (req, res) => {
    const { title, brand, price, quantity } = req.body;
    if (!title || !brand || !pricce || !quantity) {
        res.status(400).json({ status: "fail", message: "All fields required" })

    }
    else {
        const newID = products.length > 0 ? products[products.length - 1].id + 1 : 1001;
        const newProduct = {
            id: newID,
            title, brand, price, quantity
        }
    }
})
app.listen(port, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running at ${port}`)
    }
    catch (err) {
        console.log("Server Erro", err.message)
    }
})