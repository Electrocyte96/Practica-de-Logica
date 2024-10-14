function isPalindrome() {
    let input = prompt("Enter a word or sentence:");

    let cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        console.log(`'${input}' is a palindrome.`);
    } else {
        console.log(`'${input}' is not a palindrome.`);
    }
}

isPalindrome();
