/**
 * import readline package from node.js
 */

import rl from 'readline';

var readline = rl.createInterface(
    process.stdin,
    process.stdout
);

/**
 * @typedef {number} firstNumber
 * @typedef {number} secondNumber
 * @typedef {number} result
 */

/**
 * Function responsable for displaying the questions to the user and receive the user's input
 * 
 */
readline.question('\nChoose the operation:\n  [0] Sum\n  [1] Subtract\n  [2] Multiply\n  [3] Divide\n> ', function (inputedOperation) {

    if (inputedOperation == '0') {
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
    else if (inputedOperation == '1') {
        readline.question('Enter first number: ', (num) => {
            const firstNumber = parseFloat(num);

            readline.question('Enter second number: ', (num) => {
                const secondNumber = parseFloat(num);

                const result = firstNumber - secondNumber
                console.log(`The subtraction of ${firstNumber} with ${secondNumber} is: ${result}`);

                readline.close();
            });
        });
    }
    else if (inputedOperation == '2') {
        readline.question('Enter first number: ', (num) => {
            const firstNumber = parseFloat(num);

            readline.question('Enter second number: ', (num) => {
                const secondNumber = parseFloat(num);

                const result = firstNumber * secondNumber
                console.log(`The multiplication of ${firstNumber} with ${secondNumber} is: ${result}`);

                readline.close();
            });
        });
    }
    else if (inputedOperation == '3') {
        readline.question('Enter first number: ', (num) => {
            const firstNumber = parseFloat(num);

            readline.question('Enter second number: ', (num) => {
                const secondNumber = parseFloat(num);

                const result = firstNumber / secondNumber
                console.log(`The division of ${firstNumber} with ${secondNumber} is: ${result}`);

                readline.close();
            });
        });
    }
});
