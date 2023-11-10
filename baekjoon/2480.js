let input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = input[0].split(" ");
const dice1 = parseInt(num[0]);
const dice2 = parseInt(num[1]);
const dice3 = parseInt(num[2]);
let price = 0;

const copyData = num.filter((data, index) => {
  return num.indexOf(data) !== index;
});
const copyNum = copyData[0];
const maxNum = Math.max(...num);

if (dice1 == dice2 && dice1 == dice3 && dice2 == dice3) {
  price = 10000;
  console.log(price + copyNum * 1000);
} else if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3) {
  price = 1000;
  console.log(price + copyNum * 100);
} else if (dice1 != dice2 && dice1 != dice3 && dice2 != dice3) {
  console.log(maxNum * 100);
}
