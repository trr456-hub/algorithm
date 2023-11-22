const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let result = 0;
let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
for (let i = 0; i < input[0].length; i++) {
  for (j = 2; j <= 9; j++) {
    if (phone[j].includes(input[0][i])) {
      result += j + 1;
      break;
    }
  }
}
console.log(result);
