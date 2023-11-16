const input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = parseInt(input[0]) / 4;
let print = "";
for (let i = 1; i <= num; i++) {
  print += "long ";
}
console.log(print + "int");
