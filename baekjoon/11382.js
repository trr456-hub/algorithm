let input = require("fs").readFileSync("example.txt").toString().split("\n");
const inArr = input[0].split(" ");
const aNum = parseInt(inArr[0]);
const bNum = parseInt(inArr[1]);
const cNum = parseInt(inArr[2]);
console.log(aNum + bNum + cNum);
