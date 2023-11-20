const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let arr = [];
const num = input.map((el) => +el);
num.map((e) => {
  arr.push(e % 42);
});
const result = new Set(arr);
console.log([...result].length);
