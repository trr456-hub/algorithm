let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const max = Number(input[0]);
const content = input[1].split(" ");
let result = [];
for (let i = 0; i < max; i++) {
  let arr = [];
  const leng = Number(content[i]);
  for (let j = 1; j <= leng; j++) {
    // console.log("i 의 값 : ", i, "j 의 값 : ", j);
    if (leng % j == 0) {
      arr.push(j);
    }
  }
  if (arr.length == 2) {
    result.push(arr);
  }
}
console.log(result.length);
