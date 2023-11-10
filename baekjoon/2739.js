const input = require("fs").readFileSync("example.txt").toString();

const parseNum = parseInt(input);

for (let i = 1; i < 10; i++) {
  const gugudan = parseNum * i;
  console.log(`${parseNum} * ${i} =`, gugudan);
}
