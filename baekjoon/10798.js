let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let lenArr = input.map((e) => e.length);
let maxLen = Math.max(...lenArr);
let answer = "";

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] == undefined) continue;
    answer += input[j][i];
  }
}
console.log(answer);

// 너무 거지같이 로직을 작성했기 때문에 리팩토링

// const arr = input.map((e) => e.split(" "));
// let mainArr = [];
// let subArr = [];
// let fixArr = [];
// let length = [];
// let result = [];
// let rresult = [];

// for (let i = 0; i < arr.length; i++) {
//   const eleArr = arr[i][0].split("");
//   const arrLength = eleArr.length;
//   mainArr.push(eleArr);
//   length.push(Number(arrLength));
// }

// const maxLength = Math.max(...length);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < maxLength; j++) {
//     subArr.push(mainArr[i][j]);
//   }
// }
// for (let i = 0; i < subArr.length; i += maxLength) {
//   fixArr.push(subArr.slice(i, i + maxLength));
// }
// fixArr.map((item) => {
//   item.map((ele) => {
//     if (ele === undefined) {
//       ele = "";
//     }
//     result.push(ele);
//   });
// });
// for (let i = 0; i < subArr.length; i += maxLength) {
//   rresult.push(result.slice(i, i + maxLength));
// }
// let answer = "";
// for (let i = 0; i < rresult[0].length; i++) {
//   for (let j = 0; j < rresult.length; j++) {
//     answer += rresult[j][i];
//   }
// }
// console.log(answer);
