let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let num = 2;

for (let i = 0; i < Number(input[0]); i++) {
  num += Math.pow(2, i);
}
console.log(Math.pow(num, 2));
