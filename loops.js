//Practical Loops Lab - ALAB 308.3.1
//Part One: Fizz Buzz
/// Loop through all numbers from 1 to 100.
/// If a number is divisible by 3, log “Fizz.”
/// If a number is divisible by 5, log “Buzz.”
/// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
/// If a number is not divisible by either 3 or 5, log the number.
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

//Part Two: Prime Time

//Part Three: Feeling Loopy
