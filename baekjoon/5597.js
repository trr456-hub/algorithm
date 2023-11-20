const input = require("fs").readFileSync("example.txt").toString().split("\n");
let numArr = [];
let all = [];

for (let i = 0; i < input.length; i++) {
  numArr.push(Number(input[i]));
}

for (let j = 1; j <= 30; j++) {
  all.push(j);
}

const student = all.filter((x) => !numArr.includes(x));
console.log(student.join("\n"));
