const fs = require('fs');
const myReadFile = (filename) => fs.readFileSync(filename, "utf-8");
const myWriteFile = (filename, data) => fs.writeFileSync(filename, data);
const myAppendFile = (filename, data) => fs.appendFileSync(filename, data);
const myDeleteFile = (filename) => fs.unlinkSync(filename);

// console.log(myReadFile("./dummy.txt"));
// myWriteFile("./dummy.txt", "Hello World");
// console.log(myReadFile("./dummy.txt"));

module.exports = { myReadFile, myWriteFile, myAppendFile, myDeleteFile }