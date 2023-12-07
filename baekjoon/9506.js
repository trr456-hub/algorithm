let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let array = [];

for (let i = 0; i < input.length - 1; i++) {
  const N = Number(input[i]);
  let arr = [];
  for (let j = 1; j <= N; j++) {
    if (N % j == 0) {
      // console.log(N, "의 i값 : ", i, ",", N, "의 j값 : ", j);
      const yak = Math.floor(N / j);
      arr.push(yak);
    }
  }

  array.push(arr.reverse());
}
for (let i = 0; i < array.length; i++) {
  let answer = 0;
  for (let j = 0; j < array[i].length - 1; j++) {
    // console.log(array[i][j]);
    answer += array[i][j];
  }
  if (input[i] == answer) {
    array[i].pop();
    console.log(input[i], "=", array[i].join(" + "));
  } else {
    console.log(input[i], "is NOT perfect.");
  }
}
