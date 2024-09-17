//Practical Loops Lab - ALAB 308.3.1
//Part One: Fizz Buzz
/// Loop through all numbers from 1 to 100.
/// If a number is divisible by 3, log “Fizz.”
/// If a number is divisible by 5, log “Buzz.”
/// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
/// If a number is not divisible by either 3 or 5, log the number.
console.log(`---Part One: FIZZ BUZZ---`);
let num;
for (let i = 1; i < 101; i++) {
  num = 0 + i;
  let divBy3 = num % 3 == 0;
  let divBy5 = num % 5 == 0;
  if (divBy3 && divBy5 == true) {
    console.log("Fizz Buzz.");
  } else if (divBy5 == true) {
    console.log("Buzz");
  } else if (divBy3 == true) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
}
console.log(`-----------------------`);
console.log(`-----------------------`);
console.log(`---Part Two: PRIME TIME---`);
//Part Two: Prime Time
let one = 1;
let n = 0;
let prime = false;
//Finding Prime Number
for (let i = 1; i < 21; i++) {
  n = i;
  n == 1 ||
  n == 2 ||
  n == 3 ||
  (n < 9 && n % 2 == 1) ||
  (n % 2 !== 0 && n % 3 == 1) ||
  (n % 2 !== 0 && n % 2 == 1 && n % 3 !== 0) ||
  n % 6 == 1
    ? console.log(!prime + `, ` + n + ` IS PRIME.`)
    : console.log(prime + `,` + n + ` is not prime.`);
}
console.log(`-----------------------`);
console.log(`-----------------------`);
console.log(`---Part Three: Feeling Loopy---`);
//Part Three: Feeling Loopy

let csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
let comma = ",";
let newLine = `\n`;

let start = csvData.indexOf(newLine - 1);

for (let i = 0; i < 11; i++) {
  let end = csvData.indexOf(newLine, start);
  if (end === -1) end = csvData.length;

  //Extract the row data
  let row = csvData.substring(start, end);

  //Find column positions
  let column1 = row.indexOf(comma);
  let column2 = row.indexOf(comma, column1 + 1);
  let column3 = row.indexOf(comma, column2 + 1);

  //Extract column values
  let index = row.substring(0, column1).trim();
  let mass = row.substring(column1 + 1, column2).trim();
  let spring1 = row.substring(column2 + 1, column3).trim();
  let spring2 = row.substring(column3 + 1).trim();

  //Results
  console.log(`${index} ${mass} ${spring1} ${spring2}`);

  //Move to the next row
  start = end + newLine.length;
}

