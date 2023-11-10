let input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = input[0].split(" ");

let H = parseInt(num[0]);
let M = parseInt(num[1]);

M = M - 45;

if (M < 0) {
  M = 60 + M;
  H = H - 1;
  if (H < 0) {
    H = 24 + H;
  }
  console.log(H, M);
} else {
  console.log(H, M);
}
