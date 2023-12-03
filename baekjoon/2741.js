let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let answer = "";

for (let i = 0; i < N; i++) {
  answer += i + 1 + "\n";
}
console.log(answer);
