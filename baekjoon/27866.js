const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const string = input[0];
const num = Number(input[1]);

const stringA = string.slice(num - 1, num);

console.log(stringA);
