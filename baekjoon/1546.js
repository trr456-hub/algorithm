const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let num = Number(input[0]);
let score = input[1].split(" ").map(Number);
const maxScore = Math.max(...score);

let arr = [];
for (let i = 0; i < num; i++) {
  arr.push((score[i] / maxScore) * 100);
}

const sumScore = arr.reduce((a, b) => {
  return a + b;
}, 0);
console.log((sumScore / num).toFixed(2));
