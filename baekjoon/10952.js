const input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(" ");
  if (parseInt(numbers[0]) + parseInt(numbers[1]) === 0) {
    break;
  }
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}
