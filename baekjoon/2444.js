const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const num = Number(input[0]);
const leng = 2 * num - 1;
for (let i = 1; i <= leng; i++) {
  if (i % 2 == 1) {
    const space = " ".repeat((leng - i) / 2);
    console.log(space + "*".repeat(i));
  }
}
for (let j = leng - 1; j >= 0; j--) {
  if (j % 2 == 1) {
    const space = " ".repeat((leng - j) / 2);
    console.log(space + "*".repeat(j));
  }
}
