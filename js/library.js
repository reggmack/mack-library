const myLibrary = [];
const addBookButton = document.getElementById("showAddBookDialog");
const addBookDialog = document.getElementById("addBookDialog");
const createBookButton = addBookDialog.querySelector("#createBookButton");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function createBook() {
  const newBook = new Book();
  // Get the input elements
  const inputAuthor = document.getElementById("bookAuthor");
  const inputTitle = document.getElementById("bookTitle");
  const inputPages = document.getElementById("bookPages");
  const inputRead = document.getElementById("bookRead");
  // Get the values of the input elements
  newBook.author = inputAuthor.value;
  newBook.title = inputTitle.value;
  newBook.pages = inputPages.value;
  newBook.read = inputRead.value;
  // Add new book to myLibrary array
  myLibrary.push(newBook);
}

// "Add Book Button" button opens the <dialog> modally
addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// "Add Book to Library" button creates book and adds to myLibrary array
createBookButton.addEventListener("click", () => {
    createBook();
  });

// Prevent the "createBookButton" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
createBookButton.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  addBookDialog.close(); // Have to send the select box value here.
});
