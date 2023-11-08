let input = require("fs").readFileSync("example.txt").toString().split("\n");
const number = input[0].split(" ");
const a = parseInt(number[0]);
const b = parseInt(number[1]);
// console.log(
//   a + b,
//   "\n",
//   a - b,
//   "\n",
//   a * b,
//   "\n",
//   Math.floor(a / b),
//   "\n",
//   a % b
// );
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
