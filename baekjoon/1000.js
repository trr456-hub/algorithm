let input = require("fs").readFileSync("example.txt").toString().split("\n");
const spNum = input[0];
const aArr = spNum.split(" ");
const a = aArr[0];
const b = aArr[1];
const intA = parseInt(a);
const intB = parseInt(b);
// console.log(typeof intA);
// console.log(typeof intB);
console.log(intA + intB);
