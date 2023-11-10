let input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = input[0].split(" ");
const time = input[1];

let H = parseInt(num[0]);
let M = parseInt(num[1]);
let useTime = parseInt(time);

M = M + useTime;
const plusM = Math.floor(M / 60);
H = H + plusM;

if (H >= 24) {
  H = H - 24;
  M = M % 60;
  console.log(H, M);
} else {
  M = M % 60;
  console.log(H, M);
}
