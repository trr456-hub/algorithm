let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[0].split(" ").map(Number);

console.log(Math.ceil((num[2] - num[1]) / (num[0] - num[1])));
