const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const hak = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let arr = [];
let result = [];
let scoreTotal = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" "));
}
arr.map((item) => {
  if (item[2] != "P") {
    const value = hak[item[2]];
    item.splice(2, 1, value);
    result.push(Number(item[1]) * item[2]);
    scoreTotal.push(Number(item[1]));
  }
});

const total = result.reduce((a, b) => a + b, 0);
const score = scoreTotal.reduce((a, b) => a + b, 0);
const rrr = total / score;
console.log(rrr.toFixed(6));
