const input = require("fs").readFileSync("example.txt").toString().split("\n");

let arr = [];
const total = parseInt(input[0]);
const num = parseInt(input[1]) + 1;
let totalPrice = 0;

for (let i = 2; i <= num; i++) {
  const price = input[i].split(" ");
  const a = parseInt(price[0]);
  const b = parseInt(price[1]);
  arr.push(a * b);
}
for (let i = 0; i < num - 1; i++) {
  totalPrice += arr[i];
}
if (totalPrice == total) {
  console.log("Yes");
} else {
  console.log("No");
}
