const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const str = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const result = str.reduce((acc, element) => {
  const regex = new RegExp(element, "g");
  return acc.replace(regex, 1);
}, input[0]);

const arr = result.split("");
console.log(arr.length);
