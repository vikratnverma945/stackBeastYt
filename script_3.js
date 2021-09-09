// function printTable(number) {
//   i = 1;
//   while (i <= 10) {
//     console.log(number + "*" + i + "=" + i * number);
//     i = i + 1;
//   }
// }

// printTable(10);

function addNumber(num1 = 63, num2 = 5) {
  return num1 + num2;
}

let total = addNumber(20, 5) + 10;
console.log("Tota", total);

console.log("Tota", addNumber(20 + 5, 20) + addNumber(10, 10));

console.log("Total", 40 + 5, 78 + 2);
