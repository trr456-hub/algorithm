const input = require("fs").readFileSync("example.txt").toString().split("\n");
const arrFirst = input[0].split(" ");
const arrSecond = input[1].split(" ");
let answer = "";

if (Number(arrFirst[0]) === arrSecond.length) {
  const five = arrSecond.filter((x) => x < Number(arrFirst[1]));
  for (let i = 0; i < five.length; i++) {
    answer += five[i] + " ";
  }
} else {
  console.log(false);
}
console.log(answer.trim());
