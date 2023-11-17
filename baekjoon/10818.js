const input = require("fs").readFileSync("example.txt").toString().split("\n");

const firNum = Number(input[0]);
const secondNum = input[1].split(" ");
let arr = [];

if (firNum == secondNum.length) {
  for (let i = 0; i < secondNum.length; i++) {
    arr.push(parseInt(secondNum[i]));
  }
  console.log(Math.min(...arr), Math.max(...arr));
} else {
  console.log("false");
}
