import rl from 'readline';

var readline = rl.createInterface(
    process.stdin,
    process.stdout
);

readline.question('\nChoose the operation:\n  [0] Sum\n  [1] Subtract\n  [2] Multiply\n  [3] Divide\n> ', function (inputedOperation) {

    if (inputedOperation == '0') {
        function sum() {
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
    }
    else if (inputedOperation == '1') {
        function subtract() {
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
    }
    else if (inputedOperation == '2') {
        function multiply() {
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
    }
    else (inputedOperation == '3') {
        function divide() {
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
    }
};
