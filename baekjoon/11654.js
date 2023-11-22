const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input[0].charCodeAt());
