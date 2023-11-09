let input = require("fs").readFileSync("example.txt").toString().split("\n");
const number = parseInt(input[0]);
const minor = number - 543;
console.log(minor);
