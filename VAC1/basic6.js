const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter N: ', (input) => {
    const n = parseInt(input);
    let count = 0;

    for (let i = 1; i <= n; i++) {
        count++;
    }

    console.log(`Total numbers present from 1 to ${n}: ${count}`);
    readline.close();
});