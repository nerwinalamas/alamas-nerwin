function Book(title, author, gendre, availability) {
    this.title = title;
    this.author = author;
    this.gendre = gendre;
    this.availability = availability;

    this.borrowBook = function () {
        if (this.availability) {
            this.availability = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available for borrowing.`);
        }
    };

    this.returnBook = function () {
        this.availability = true;
        console.log(`${this.title} has been returned.`);
    };

    this.displayInfo = function () {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Genre:", this.genre);
        console.log(
            "Availability:",
            this.availability ? "Available" : "Not Available"
        );
    };
}

function Library() {
    let books = [];

    this.addBook = function (title, author, genre) {
        const newBook = new Book(title, author, genre, true);
        books.push(newBook);
        console.log(`${title} has been added to the library.`);
    };

    this.searchBook = function (title) {
        const foundBook = books.find(
            (book) => book.title.toLowerCase() === title.toLowerCase()
        );

        if (foundBook) {
            foundBook.displayInfo();
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    };

    this.displayBooks = function () {
        if (books.length === 0) {
            console.log("No books available in the library.");
            return;
        }

        console.log("Available books in the library:");
        books.forEach((book) => book.displayInfo());
    };
}

const library = new Library();

library.addBook("Book about Javascript", "John Doe", "Coding");
library.addBook("HTML for Babies", "Jane Smith", "Coding");
library.addBook("Style your website with CSS", "Mary Doe", "Coding");

library.searchBook("HTML for Babies");

library.displayBooks();
