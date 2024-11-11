// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num) {
    return num % 2 === 0 ? true : false;
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let i = 0; i <= 10; i++) {
    console.log(`${i} is Even: ${isEven(i)}`);
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
// let continueLoop = true;
// while (continueLoop) {
//     const firstNum = parseInt(prompt("Enter First Number:"))
//     const secondNum = parseInt(prompt("Enter Second Number:"))

//     if (firstNum < 0 || secondNum < 0) {
//         continueLoop = false
//         console.log("Loop Terminate")
//     } else {
//         console.log(`${firstNum} x ${secondNum} = ${multiply(firstNum, secondNum)}`)
//     }
// }

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString("Hello"));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(
    `Number of vowels of the word "JavaScript" is ${countVowels("JavaScript")}`
);

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arr) {
    return Math.max(...arr);
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(`The max value is ${findMax([4, 9, 2, 7, 5])}`);

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(num) {
    if (num < 0) return undefined;
    if (num === 0 || num === 1) return 1;

    let factorial = 1;

    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(calculateFactorial(5));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(`Check if "level" is palindrome: ${isPalindrome("level")}`);

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizeFirstLetter("javascript"));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
