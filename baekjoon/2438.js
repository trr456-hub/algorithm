const input = require("fs").readFileSync("example.txt").toString().split("\n");
const num = Number(input[0]);
let answer = "";
for (let i = 1; i <= num; i++) {
  answer += "*".repeat(i) + "\n";
}
console.log(answer);
