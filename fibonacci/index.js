// function fibonacci() {}

// const fibonacci = (n) => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

// for (let i = 0; i < 10; i++) {
//   console.log(fibonacci(i));
// }

// function fibonacci() {
//   let sequence = [0, 1];
//   for (let i = 1; i < 9; i++) {
//     let new_value =
//       sequence[sequence.length - 1] + sequence[sequence.length - 2];
//     sequence.push(new_value);
//   }
//   sequence.forEach((item) => {
//     console.log(item);
//   });
// }

// fibonacci();

// function fibonacci(num) {
//   let accFirst = 0;
//   let accSecond = 1;
//   let acc = 1;
//   for (let i = 0; i < num; i++) {
//     if (i === 0) {
//       console.log(i);
//     } else {
//       console.log(acc);
//       acc = accFirst + accSecond;
//       accFirst = accSecond;
//       accSecond = acc;
//     }
//   }
// }
// fibonacci(10);

const number = parseInt(prompt("Enter the number : "));

function fibonaccci(enteredNum) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= enteredNum; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

function SumNum() {}

// fibonaccci(number);

// document.querySelector('button').addEventListener('click', () => {

// })
