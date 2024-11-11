// Step 1: Create an array called 'students' with three objects representing student information.
// Each student object should have properties: 'name', 'age', and 'grade'.
let students = [
    {
        name: "Steve Rogers",
        age: 18,
        grade: 12,
    },
    {
        name: "Peter Parker",
        age: 16,
        grade: 10,
    },
    {
        name: "Tony Stark",
        age: 20,
        grade: 12,
    },
];

// Step 2: Access the name of the second student in the 'students' array and log it to the console.
console.log("Second Student: ", students[1].name);

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.
students.push({
    name: "Nick Fury",
    age: 19,
    grade: 11,
});

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.
for (let i = 0; i < students.length; i++) {
    console.log(
        `Student Name: ${students[i].name}, Grade: ${students[i].grade}`
    );
}

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.
const book = {
    title: "The Amazing Spiderman",
    author: "Stan lee",
    year: "2006",
};

// Step 6: Access the title of the 'book' object and log it to the console.
console.log(`Book Title: ${book.title}`);

// Step 7: Update the 'year' property of the 'book' object to 1930.
book.year = "1930";

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.
book.getSummary = function () {
    return `Book Title: ${this.title}, Book Author: ${this.author}, Year: ${this.year}`;
};

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.
console.log(book.getSummary());

// Step 10: Create an array called 'library' and add the 'book' object to it.
let library = [];
library.push(book);

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.
console.log("Library:", library);

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.
const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: "2024",
};

// Step 13: Access the 'model' property of the 'car' object and log it to the console.
console.log("Car Model:", car.model);

// Step 14: Update the 'year' property of the 'car' object to 2023.
car.year = "2023";

// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.
car.startEngine = function () {
    console.log("Engine Starting...");
};

// Step 16: Call the 'startEngine' method of the 'car' object.
car.startEngine();

// Step 17: Create an array called 'garage' and add the 'car' object to it.
let garage = [];
garage.push(car);

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.
console.log("Garage:", garage);

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.
const person = {
    name: "John Doe",
    age: "26",
    city: "Makati City",
};

// Step 20: Access the 'age' property of the 'person' object and log it to the console.
console.log("Person's Age:", person.age);

// Feel free to add more steps or customize the activity according to your needs.
