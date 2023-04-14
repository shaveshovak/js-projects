function fizzbuzz(number) {
    if (typeof number !== "number" || isNaN(number) || number < 0) {
      return "Please provide a valid positive number";
    } else if (number === 0) {
      return 0;
    } else if (number % 15 === 0) {
      // or if (number % 3 === 0 && number % 5 === 0)
      return "fizzbuzz";
    } else if (number % 3 === 0) {
      return "fizz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else return number;
}

// console.log(fizzbuzz(20))

for (let i = 0; i <= 36; i++) {
  console.log(fizzbuzz(i));
}


// Simplified syntax

// function fizzbuzz(number) {
//   if (typeof number !== "number" || isNaN(number) || number < 0)
//     return "Please provide a valid positive number";
//   if (number === 0) return 0;
//   if (number % 15 === 0) return "fizzbuzz";
//   // or number % 3 === 0 && number % 5 === 0
//   if (number % 3 === 0) return "fizz";
//   if (number % 5 === 0) return "buzz";
//   return number;
// }


// SWITCH APPROACH
// function fizzbuzz(number) {
//   switch (true) {
//     case number % 3 === 0 && number % 5 === 0:
//       console.log("FizzBuzz");
//       break;

//     case number % 3 === 0:
//       console.log("Fizz");
//       break;

//     case number % 5 === 0:
//       console.log("Buzz");
//       break;

//     default:
//       console.log(number);
//       break;
//   }
// }

// fizzbuzz(15);
