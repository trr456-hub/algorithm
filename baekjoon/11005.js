let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[0].split(" ");
const ten = parseInt(arr[0], 10).toString(Number(arr[1]));
console.log(ten.toUpperCase());
