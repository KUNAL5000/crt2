const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {

    num = Number(num);

    if (num % 2 === 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }

    rl.close();
});