let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N] = input.shift();
let arr = new Array(100).fill().map((v) => new Array(100).fill(false));

for (let i = 0; i < input.length; i++) {
  let x = Number(input[i].split(" ")[0]);
  let y = Number(input[i].split(" ")[1]);

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      arr[x + j][y + k] = true;
    }
  }
}

const result = arr.reduce((acc, cur) => {
  for (let el of cur) {
    if (el) acc++;
  }
  return acc;
}, 0);

console.log(result);
