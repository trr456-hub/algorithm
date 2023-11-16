const input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(" ");
  if (!(Number(numbers[0]) + Number(numbers[1]))) {
    break;
  }
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
