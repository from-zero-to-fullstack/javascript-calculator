// Opção 1:
import rl from 'readline';

var readline = rl.createInterface(
    process.stdin,
    process.stdout
);

let firstNumber = 0;
let secondNumber = 0;
let result = 0;

function sum() {
    result = firstNumber + secondNumber;
}

function showResult() {
    console.log(`The sum of ${firstNumber} with ${secondNumber} is: ${result}`);
}

function main() {
    readline.question('Enter first number: ', (num) => {
        firstNumber = parseFloat(num);

        readline.question('Enter second number: ', (num) => {
            secondNumber = parseFloat(num);

            sum();
            showResult();

            readline.close();
        });
    });
}

main();

// Opção 2:
import rl from 'readline';

var readline = rl.createInterface(
    process.stdin,
    process.stdout
);

function main() {
    readline.question('Enter first number: ', (num) => {
        const firstNumber = parseFloat(num);

        readline.question('Enter second number: ', (num) => {
            const secondNumber = parseFloat(num);

            const result = firstNumber + secondNumber
            console.log(`The sum of ${firstNumber} with ${secondNumber} is: ${result}`);

            readline.close();
        });
    });
}

main();


/* Baseei-me neste exemplo:

// This is required and it's part of node.js api
const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
// Here we interact with user and ask left side digit
rl.question("Please provide left side digt ", function(leftSide) {
// After user presented digit we're asing for right side
rl.question("Now right side ", function(rightSide) {
// So we have two digits it's time to sum:
/* we're converting  first and second inputs
   and plusing them
*/
/*   // as output we're getting seft + right in same way we can times,  devide etc
    console.log(`Sum result is ${Number(leftSide) + Number(rightSide)}`);
    rl.close();
  });
});

// As you see we can call different functions during operation.
rl.on("close", function() {
console.log("\nBYE BYE !!!");
process.exit(0);
});
*/