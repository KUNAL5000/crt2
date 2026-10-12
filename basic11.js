const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter total numbers (N): ', (nInput) => {
    const n = parseInt(nInput);
    let count = 0;
    let smallest = Infinity;

    function askNumber() {
        if (count < n) {
            readline.question(`Enter number ${count + 1}: `, (numInput) => {
                const num = parseFloat(numInput);
                if (num < smallest) {
                    smallest = num;
                }
                count++;
                askNumber();
            });
        } else {
            console.log(`The smallest number is: ${smallest}`);
            readline.close();
        }
    }

    askNumber();
});