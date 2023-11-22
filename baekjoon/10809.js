const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];

for (let i = 97; i <= 122; i++) {
  arr.push(input[0].indexOf(String.fromCharCode(i)));
}
console.log(arr.join(" "));
