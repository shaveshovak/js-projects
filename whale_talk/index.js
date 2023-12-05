// const input = 'turpentine and turtles';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const resultArray = [];

// for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
//     // console.log(`Input index is ${inputIndex}`);

//     if(input[inputIndex] === 'e') {
//         resultArray.push(input[inputIndex]);
//     }

//     if(input[inputIndex] === 'u') {
//         resultArray.push(input[inputIndex]);
//     }

//     for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
//         // console.log(`Vowel index is ${vowelIndex}`);

//         if(input[inputIndex] === vowels[vowelIndex]) {
//             console.log(input[inputIndex]);
//             resultArray.push(input[inputIndex]);
//         }
//     }
// }

// const resultString = resultArray.join('').toUpperCase();

// console.log(resultString)
// // console.log(resultArray)


const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let char of input) {
    if (vowels.includes(char) || char === 'e' || char === 'u') {
        resultArray.push(char);
    }
}

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);