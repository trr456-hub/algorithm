const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const num1 = Number(input[0]);

for (let i = 1; i <= num1; i++) {
  let answer = "";
  const [num2, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    for (let c = 0; c < num2; c++) {
      answer += str[j];
    }
  }
  console.log(answer);
}
