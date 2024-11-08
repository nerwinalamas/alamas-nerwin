let score = parseInt(prompt("Enter a score"));

if (score >= 90) {
    console.log("Grade: A")
} else if (score <= 89 && score >= 80) {
    console.log("Grade: B")
} else if (score <= 79 && score >= 70) {
    console.log("Grade: C")
} else if (score <= 69 && score >= 60) {
    console.log("Grade: D")
} else {
    console.log("Grade: F")
}
