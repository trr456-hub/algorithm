const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(" ");
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "") {
    count++;
  }
}
console.log(count);
