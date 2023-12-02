let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

let i = 1;
let sum = 1;

while (sum < num) {
  sum += 6 * i;
  i++;
}
console.log(i);
