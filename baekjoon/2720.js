let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const money = {
  Quarter: 25,
  Dime: 10,
  Nickel: 5,
  Penny: 1,
};

for (let i = 1; i <= input[0]; i++) {
  let value = Number(input[i]);
  const Quarter = Math.floor(value / money.Quarter);
  value %= money.Quarter;
  const Dime = Math.floor(value / money.Dime);
  value %= money.Dime;
  const Nickel = Math.floor(value / money.Nickel);
  value %= money.Nickel;
  const Penny = Math.floor(value / money.Penny);
  value %= money.Penny;

  console.log(Quarter, Dime, Nickel, Penny);
}
