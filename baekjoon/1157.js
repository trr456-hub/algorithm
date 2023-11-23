const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

// 오브젝트를 활용해 keys, values값을 따로 추출하여 문제 해결
const str = input[0].split("");
let arr = [];
const result = {};

for (let i = 0; i < str.length; i++) {
  arr.push(str[i].toLowerCase());
}
arr.forEach((element) => {
  result[element] = (result[element] || 0) + 1;
});
const arrObj = Object.values(result).map((values) => values);
const max = Math.max(...arrObj);
const resultData = arrObj.filter((element) => element === max);
const getKey = Object.keys(result).find((key) => result[key] == resultData);

if (resultData.length >= 2) {
  console.log("?");
} else {
  console.log(getKey.toUpperCase());
}
