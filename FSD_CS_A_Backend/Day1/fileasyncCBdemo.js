const fs = require("fs");
const filename = "./dummy.txt"
const myAsyncRead = (filename) => fs.readFile(filename, "utf-8", (err, data) => {
    try {
        if (err) throw err;
        console.log(data);
    } catch (error) {
        console.log("Error reading file: ", error);
    }
})

const data = "Hello World"
const myAsyncWrite = (filename, data) => fs.writeFile(filename, data, (err) => {
    try {
        if (err) throw err;
        console.log("File written successfully");
    } catch (error) {
        console.log("Error writing file: ", error);
    }
})

module.exports = { myAsyncRead, myAsyncWrite }