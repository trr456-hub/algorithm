let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((e) => e.split(" "));
let result = [];
let numArr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result.push(Number(arr[i][j]));
  }
}

const max = Number(Math.max(...result));
console.log(max);

for (let i = 0; i < result.length; i += arr[0].length) {
  numArr.push(result.slice(i, i + arr[0].length));
}
for (let i = 0; i < numArr.length; i++) {
  for (let j = 0; j < numArr.length; j++) {
    if (numArr[i][j] === max) {
      console.log([i + 1, j + 1].join(" "));
    }
  }
}
