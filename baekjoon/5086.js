let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].split(" ");
  if (arr[1] % arr[0] == 0) {
    console.log("factor");
  } else if (arr[0] % arr[1] == 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
