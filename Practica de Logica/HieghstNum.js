function findHighestNumber() {
    let numbers = [];  

    for (let i = 1; i <= 10; i++) {
        let userInput = prompt(`Enter number ${i}:`);
        let number = parseFloat(userInput);  

       
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            console.log("Invalid input. Please enter a valid number.");
            i--;  // Decrement 'i' to ask for the number again
        }
    }

    let highestNumber = Math.max(...numbers);

    console.log(`The highest number is: ${highestNumber}`);
}

findHighestNumber();
