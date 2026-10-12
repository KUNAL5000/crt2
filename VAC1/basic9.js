const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter total numbers (N): ', (nInput) => {
    const n = parseInt(nInput);
    let count = 0;
    let largest = -Infinity;

    function askNumber() {
        if (count < n) {
            readline.question(`Enter number ${count + 1}: `, (numInput) => {
                const num = parseFloat(numInput);
                if (num > largest) {
                    largest = num;
                }
                count++;
                askNumber();
            });
        } else {
            console.log(`The largest number is: ${largest}`);
            readline.close();
        }
    }

    askNumber();
});