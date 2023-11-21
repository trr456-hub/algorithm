const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = input[0].split(" ").map((el) => +el);

let numArr = Array(N)
  .fill(1)
  .map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  let arr = [];
  for (let j = start - 1; j < end; j++) {
    arr.push(numArr[j]);
  }
  arr.reverse();
  numArr.splice(start - 1, end - start + 1, ...arr);
}
console.log(numArr.join(" "));
