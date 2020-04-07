const bookFormButton = document.getElementById('form-toggle-button');
const bookForm = document.getElementById('book-form');
const newBookButton = document.getElementById('new-book-button');
const bookTable = document.getElementById('book-table');

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
    var titleInput = document.getElementById('book-title').value;
    var authorInput = document.getElementById('book-author').value;
    var pagesInput = document.getElementById('book-pages').value;

    console.log(titleInput);// for checking input
    console.log(authorInput);  // for checking input
    console.log(pagesInput);  // for checking input

    if (titleInput != '' || authorInput != '' || pagesInput != '') {
        alert('Please fill out every field to add a book to the database.');
    } else {
        var newBook = new Book(titleInput, authorInput, pagesInput);

        myLibrary.push(newBook);

        var row = bookTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = myLibrary[myLibrary.length - 1].bookTitle;
        cell2.innerHTML = myLibrary[myLibrary.length - 1].bookAuthor;
        cell3.innerHTML = myLibrary[myLibrary.length - 1].bookPages;

        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('book-pages').value = '0';
    }
}

/**
 * eventListener for add new book button
 */
bookFormButton.addEventListener('click', (e) => {
    e.preventDefault();

    bookForm.classList.toggle('active');
});

newBookButton.addEventListener('click', (e) => {
    e.preventDefault();

    addBookToLibrary();
    bookForm.classList.toggle('active');
});
