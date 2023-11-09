let input = require("fs").readFileSync("example.txt").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const bf = input[1].slice(0, 1);
const bs = input[1].slice(1, 2);
const bt = input[1].slice(2);

console.log(a * bt);
console.log(a * bs);
console.log(a * bf);
console.log(a * b);
