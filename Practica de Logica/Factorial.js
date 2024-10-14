function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateFactorial() {
    let n = parseInt(prompt("Enter an integer number (n) where 1 <= n:"));

    if (n >= 1 && Number.isInteger(n)) {
        let result = factorial(n);
        console.log(`The factorial of ${n} is ${result}.`);
    } else {
        console.log("Please enter a valid integer greater than or equal to 1.");
    }
}

calculateFactorial();
