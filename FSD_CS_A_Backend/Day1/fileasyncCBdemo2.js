const { myAsyncRead, myAsyncWrite } = require("./fileasyncCBdemo.js");

const filename = "./dummy.txt"
myAsyncRead(filename);
myAsyncWrite(filename, "Hello, World!");
myAsyncRead(filename);
