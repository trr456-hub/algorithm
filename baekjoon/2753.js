let input = require("fs").readFileSync("example.txt").toString().split("\n");
const since = parseInt(input[0]);

if (since % 400 == 0) {
  console.log(1);
} else if (since % 4 == 0 && since % 100 != 0) {
  console.log(1);
} else {
  console.log(0);
}
