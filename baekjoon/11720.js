const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split("").map(Number);

console.log(arr.reduce((a, b) => a + b, 0));
