const input = require("fs").readFileSync("example.txt").toString().split("\n");
const num = Number(input[0]);
let answer = "";
for (let i = 1; i <= num; i++) {
  let numArr = input[i].split(" ");
  answer += `Case #${i}: ${Number(numArr[0])} + ${Number(numArr[1])} = ${
    Number(numArr[0]) + Number(numArr[1])
  }\n`;
}
console.log(answer);
