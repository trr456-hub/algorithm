let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const [start, end] = input[0].split(" ");
let arrA = [];
let arrB = [];
let result = [];
let dap = [];

for (let i = 1; i <= end; i++) {
  let arr = input[i].split(" ");
  arrA.push(arr);
}
for (let i = Number(start) + 1; i <= Number(start) + Number(end); i++) {
  let arr = input[i].split(" ");
  arrB.push(arr);
}
for (let i = 0; i < end; i++) {
  for (let j = 0; j < end; j++) {
    let sum = Number(arrA[i][j]) + Number(arrB[i][j]);
    result.push(sum);
  }
}
for (let i = 0; i < result.length; i += Number(start)) {
  dap.push(result.slice(i, i + Number(start)));
}

dap.map((item) => console.log(item.join(" ")));
