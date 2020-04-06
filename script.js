const bookFormButton = document.getElementById("form-toggle-button");
const bookForm = document.getElementById("book-form");
const newBookButton = document.getElementById("new-book-button");
const bookTable = document.getElementById("book-table");

/**
 * eventlistener for add new book button
 */
bookFormButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    bookForm.classList.toggle('active');
});

let myLibrary = [];

function Book(
    title,
    author,
    pages,
    // read
) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    // this.bookRead = read;
}

function addBookToLibrary() {

}

// function myFunction() {
//     var row = bookTable.insertRow(-1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }

// myFunction();