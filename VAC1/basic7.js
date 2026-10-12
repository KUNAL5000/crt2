const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter N: ', (input) => {
    const n = parseInt(input);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    console.log(`Sum of all odd numbers from 1 to ${n}: ${sum}`);
    readline.close();
});