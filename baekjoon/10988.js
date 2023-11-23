const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0].split("");

const strReverse = str.reverse();
let answer = "";
for (let i = 0; i < strReverse.length; i++) {
  answer += strReverse[i];
}

if (input[0] == answer) {
  console.log(1);
} else {
  console.log(0);
}
