const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}
let answer = arr.length;
let temp = "";
arr.forEach((item) => {
  temp = item[0];
  for (let i = 1; i < item.length; i++) {
    const aa = temp.includes(item[i]);
    if (aa && item[i - 1] != item[i]) {
      answer--;
      break;
    }
    temp += item[i];
  }
});
console.log(answer);
