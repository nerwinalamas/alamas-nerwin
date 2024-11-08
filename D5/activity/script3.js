const secretNumber = 7;
let attempts = 0;
let guessedNumber;

console.log("Welcome to activity 3.");

do {
    guessedNumber = parseInt(prompt("Guesse the secret number:"));

    if (guessedNumber < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log(
            "Congratulations! You guessed the correct number: ",
            secretNumber
        );
    }

    attempts++;
} while (guessedNumber !== secretNumber);

console.log("It took you " + attempts + " attempts.");
