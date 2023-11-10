const input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = parseInt(input[0]);
let answer = 0;
for (let i = 0; i <= num; i++) {
  answer += i;
}
console.log(answer);
