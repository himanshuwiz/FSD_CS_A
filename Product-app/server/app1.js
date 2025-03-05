const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 3500;
let users = [];
const loadUsers = async () => {
    try {
        const userdata = await fs.readFile("./users.json", "utf-8");
        console.log("After read file")
        const usersjson = await userdata.json();
        console.log("After JSON")
        users = JSON.parse(usersjson);
    }
    catch (err) {
        console.log("file load error")
        users = [];
    }

}
const saveUser = async () => {
    await fs.writeFile("users.json", JSON.stringify(users))
}
const m1 = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        res.status(400).send('send age in query')
    }
    else {
        if (age < 18) {
            res.status(401).send('user not authorized')
        }
        else {
            next();
        }
    }
}
// app.use(m1);
app.use(express.json())
loadUsers();
app.get("/users", (req, res) => {
    res.status(200).json(users);
})
app.get("/user/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(user => user.id == uid);
    if (index == -1) {
        res.status(400).json({ message: "user not found" })
    }
    else {
        res.status(200).json({ message: "user found", data: users[index] })
    }
})
app.post("/createuser", m1, (req, res) => {
    const { name: newname, email: newemail } = req.body;
    if (!newname || !newemail) {
        res.status(400).json({ message: "Incomplete input" })
    }
    else {
        const newId = Date.now();
        const newUser = {
            id: newId, name: newname, email: newemail
        }
        users.push(newUser);
        saveUser();
        res.status(201).json({ message: "user created successfully", data: newUser })
    }

})
app.put("/edituser/:id", m1, (req, res) => {
    const uid = req.params.id;
    const { name: newname, email: newemail } = req.body;
    if (!newname || !newemail) {
        res.status(400).json({ message: 'Invalid Input' })
    }
    else {
        const index = users.findIndex(user => user.id == uid);
        if (index == -1) {
            res.status(400).json({ message: 'User Id not Found' })
        }
        else {
            users[index].name = newname;
            users[index].email = newemail;
            saveUser();
            res.status(200).json({ message: "User Edited Successfully", data: users[index] })
        }
    }
})
app.delete("/user/:id", m1, (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(user => user.id == uid);
    if (index == -1) {
        res.status(400).json({ message: 'User Id not Found' })
    }
    else {
        const deluser = users.splice(index, 1);
        saveUser();
        res.status(200).json({ message: "User Deleted Successfully", data: deluser })
    }
})




app.listen(port, () => {
    console.log(`Server is running on port ${ port }`)
})