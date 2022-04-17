
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question("Please, digit the first number to sum: ", function(num1) {
    rl.question("Please, digit the second number to sum: ", function (num2){
        console.log(`The result of your sum is: ${Number(num1) + Number(num2)}`);
        rl.close();
    });
});

rl.on("close", function(){
    console.log("\nThanks for using me!! See you next time!!");
    process.exit(0);
})


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