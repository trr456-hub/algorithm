let input = require("fs").readFileSync("example.txt").toString().split("\n");
const number = input[0].split(" ");
const aNum = parseInt(number[0]);
const bNum = parseInt(number[1]);
const cNum = parseInt(number[2]);

const a = (aNum + bNum) % cNum;
const b = ((aNum % cNum) + (bNum % cNum)) % cNum;
const c = (aNum * bNum) % cNum;
const d = ((aNum % cNum) * (bNum % cNum)) % cNum;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
