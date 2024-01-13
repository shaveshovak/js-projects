// The Book class represents an individual book.
class Book {
    constructor(title, genre, author, read = false, readDate = null) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = read ? readDate : null;  // Ensures readDate is set only if the book is read
    }

    markAsRead() {
        this.read = true;
        this.readDate = new Date(Date.now());
    }
}

// The BookList class manages a collection of books, tracking read and unread books, and managing the current and next books to read.
class BookList {
    constructor() {
        this.books = [];
        this.booksRead = 0;
        this.booksNotReadYet = 0;
        this.currentBook = null;
        this.nextBook = null;
        this.lastBook = null;
    }

    // add method adds a new book to the list and updates the read/unread counts and the current/next book references if needed.
    add(book) {
        this.books.push(book);
        this.booksNotReadYet++;

        // Automatically set the current or next book if they're not set yet
        if (!this.currentBook) this.currentBook = book;
        else if (!this.nextBook) this.nextBook = book;
    }

    // findNextBookToRead is a helper method that finds the next book that hasn't been read yet.
    findNextBookToRead() {
        return this.books.find(book => !book.read);
    }

    // as read, updates the read date, adjusts the count of read and unread books, and updates the references for the current, next, and last books read.
    finishCurrentBook() {
        if (this.currentBook) {
            this.currentBook.markAsRead();
            this.lastBook = this.currentBook;
            this.booksRead++;
            this.booksNotReadYet--;

            this.currentBook = this.nextBook;
            this.nextBook = this.findNextBookToRead();
        }
    }

//     getBookByTitle(title) {
//         return this.books.find(book => book.title === title);
//     }
}

let myBookList = new BookList();

let book1 = new Book("The Hobbit", "Fantasy", "J.R.R. Tolkien");
let book2 = new Book("1984", "Dystopian", "George Orwell");
let book3 = new Book("To Kill a Mockingbird", "Fiction", "Harper Lee");

myBookList.add(book1);
myBookList.add(book2);
myBookList.add(book3);

// console.log(myBookList.books);
// console.log(myBookList.currentBook.title)

myBookList.finishCurrentBook();

// console.log(myBookList.books);

myBookList.finishCurrentBook();
console.log(myBookList.books);


// myBookList.displayBooks(); // Re-display books with updated status
