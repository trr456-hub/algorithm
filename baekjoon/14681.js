const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", function (x) {
  count++;
  input.push(parseInt(x));
  if (count == 2) {
    rl.close();
  }
}).on("close", function () {
  let x = input[0];
  let y = input[1];
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
});
