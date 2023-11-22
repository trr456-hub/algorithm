const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[0].split(" ");
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  const elArr = arr[i].split("");
  const arrReverse = elArr.reverse();
  const result = arrReverse.join("");
  arr2.push(Number(result));
}
console.log(Math.max(...arr2));
