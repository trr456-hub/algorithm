let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= num[0]; i++) {
  const N = Math.floor(num[0] / i);
  if (Math.floor(num[0] % i) == 0) {
    arr.push(N);
  }
}

if (arr.reverse()[num[1] - 1] == undefined) {
  console.log(0);
} else {
  console.log(arr[num[1] - 1]);
}
