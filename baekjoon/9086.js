const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const max = Number(input[0]);

for (let i = 1; i <= max; i++) {
  let arr = input[i].split("");
  const firNum = arr[0];
  const lastNum = arr[arr.length - 1];
  const array = Array(firNum, lastNum);
  console.log(array.join(""));
}
