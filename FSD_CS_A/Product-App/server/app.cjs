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
app.use(express.json())
app.get("/products", (req, res) => {
    res.status(200);
    res.json(products);
})
app.get("/product/:id", (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex(ind => ind.id == pid);
    if (index == -1) {
        res.status(400).json({ status: "fail", messsage: "product not found" })

    }
    else {
        res.status(200).json({ status: "success", messsage: "product found", data: products[index] })

    }
})
app.post("/createproduct", (req, res) => {
    const { title, brand, price, quantity } = req.body;
    if (!title || !brand || !price || !quantity) {
        res.status(400).json({ status: "fail", message: "All fields required" })

    }
    else {
        const newID = products.length > 0 ? products[products.length - 1].id + 1 : 1001;
        const newProduct = {
            id: newID,
            title, brand, price, quantity

        }
        products.push(newProduct);
        res.status(201).json({ status: "success", message: "product created successfully", newProduct })
    }
})
app.patch("/editproduct/:id", (req, res) => {
    const pid = req.params.id;
    const { title, brand, price, quantity } = req.body;
    if (!title || !brand || !price || !quantity) {
        res.status(400).json({ status: "fail", message: "All fields required to update" })

    }
    else {
        const index = products.findIndex(ind => ind.id == pid);
        if (index == -1) {
            res.status(400).json({ status: "fail", messsage: "product not found" })

        }
        else {
            products[index].title = title;
            products[index].brand = brand;
            products[index].price = price;
            products[index].quantity = quantity;

            res.status(200).json({ status: "success", message: "product updated successfully", data: products[index] })
        }
    }
})
app.delete("/deleteprodcut/:id", (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex(ind => ind.id == pid);
    if (index == -1) {
        res.status(400).json({ status: "fail", messsage: "product not found" })

    }
    else {
        const a = products.splice(index, 1);
        res.status(200).json({ status: "success", message: "product deleted successfully", data: a })
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