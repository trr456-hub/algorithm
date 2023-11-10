let input = require("fs").readFileSync("example.txt").toString().split("\n");
const num = input[0].split(" ");
const a = parseInt(num[0]);
const b = parseInt(num[1]);
if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a == b) {
  console.log("==");
}
