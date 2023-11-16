const input = require("fs").readFileSync("example.txt").toString().split("\n");
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const star = "*".repeat(i);
  console.log(star.padStart(num));
}
