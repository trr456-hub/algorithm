const input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = parseInt(input[0]);
const arr = input[1].split(" ");
const number = input[2];

if (num === arr.length) {
  const vNum = arr.filter((v) => v == number);
  console.log(vNum.length);
} else {
  console.log("false");
}
