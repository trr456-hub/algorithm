const input = require("fs").readFileSync("example.txt").toString().split("\n");
let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(Number(input[i]));
}
console.log(Math.max(...arr));
console.log(arr.indexOf(Math.max(...arr)) + 1);
