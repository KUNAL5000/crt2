const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter N: ', (input) => {
    const n = parseInt(input);

    if (n <= 0) {
        console.log("Please enter a positive integer.");
    } else {
        let t1 = 0, t2 = 1;
        console.log("Fibonacci Series:");

        for (let i = 1; i <= n; i++) {
            console.log(t1);
            let nextTerm = t1 + t2;
            t1 = t2;
            t2 = nextTerm;
        }
    }

    readline.close();
});