let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const min = Number(input[0]);
const max = Number(input[1]);
let answer = [];

for (let i = min; i <= max; i++) {
  let arr = [];
  for (let j = 0; j <= i; j++) {
    if (i % j == 0) {
      arr.push(i / j);
    }
  }
  if (arr.length == 2) {
    answer.push(arr[0]);
  }
}

if (answer.length == 0) {
  console.log(-1);
} else {
  const sum = answer.reduce((acc, cur) => acc + cur);
  console.log(sum + "\n" + Math.min(...answer));
}
