const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[0].split(" ").map(Number);
const chess = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < arr.length; i++) {
  let result = arr[i] == chess[i];
  if (result == true) {
    result = 0;
  } else {
    result = chess[i] - arr[i];
  }
  console.log(result);
}
