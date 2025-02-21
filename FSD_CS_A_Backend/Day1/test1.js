const { myReadFile, myWriteFile, myAppendFile, myDeleteFile } = require("./test.js");

const filename = "./dummy.txt"
// console.log(myReadFile(filename, "utf-8"));
// myWriteFile(filename, "Hello World")
// console.log(myReadFile(filename, "utf-8"));

console.log(myReadFile(filename, "utf-8"));
myWriteFile(filename, " from Mars")
console.log(myReadFile(filename, "utf-8"));