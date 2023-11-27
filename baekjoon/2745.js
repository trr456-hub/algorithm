const readline = require("readline");
const fs = require("fs"); // 제출시 삭제
const path = "./example.txt"; // 제출시 삭제
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  // 입력 받은 값을 처리하는 코드 //
  input.push(line);
});

rl.on("close", () => {
  // 입력이 끝나고 실행하는 코드 //
  const arr = input[0].split(" ");
  console.log(parseInt(arr[0], arr[1]).toString(10));

  process.exit();
});
