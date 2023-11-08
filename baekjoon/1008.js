let input = require("fs").readFileSync("example.txt").toString().split("\n");
const number = input[0];
const data = number.split(" ");
const a = parseInt(data[0]);
const b = parseInt(data[1]);
console.log(a / b);
