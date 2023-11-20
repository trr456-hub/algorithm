const input = require("fs").readFileSync("example.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map((el) => +el);

let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

for (let j = 1; j <= M; j++) {
  let [start, end] = input[j].split(" ").map((el) => +el);
  [arr[start - 1], arr[end - 1]] = [arr[end - 1], arr[start - 1]];
}
console.log(arr.join(" "));
