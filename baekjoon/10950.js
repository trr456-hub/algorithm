const input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
  let number = input[i].split(" ");
  const a = parseInt(number[0]);
  const b = parseInt(number[1]);
  console.log(a + b);
}
