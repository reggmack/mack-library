let myLibrary = [];
const addBookButton = document.getElementById("showAddBookDialog");
const addBookDialog = document.getElementById("addBookDialog");
const createBookButton = addBookDialog.querySelector("#createBookButton");
const bookContainer = document.querySelector("#bookContainer");
const deleteBookButton = document.createElement('button');
deleteBookButton.textContent = "Delete";
const div = document.createElement('div');

let inputAuthor;
let inputTitle;
let inputPages;
let inputRead;

// Add default Books to Library
const addBookToLibrary = (book) => myLibrary.push(book);
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", "295", false));

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function createBook() {
  const newBook = new Book();
  // Get the input elements
  inputAuthor = document.getElementById("bookAuthor");
  inputTitle = document.getElementById("bookTitle");
  inputPages = document.getElementById("bookPages");
  inputRead = document.getElementById("bookRead");
  // Get the values of the input elements
  newBook.author = inputAuthor.value;
  newBook.title = inputTitle.value;
  newBook.pages = inputPages.value;
  newBook.read = inputRead.value;
  // Add new book to Library
  myLibrary.push(newBook);
  bookContainer.textContent = "";
  showBooks();
}

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const catalogCard = document.createElement("div");
    catalogCard.textContent = `${myLibrary[i].author} ${myLibrary[i].title} ${myLibrary[i].pages} ${myLibrary[i].read}`;
    bookContainer.appendChild(catalogCard);
  }
}
showBooks();

// "Add Book Button" button opens the <dialog> modally
addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// "Add Book to Library" button creates book and adds to myLibrary array
// Prevent the "createBookButton" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
createBookButton.addEventListener("click", (event) => {
  createBook();
  event.preventDefault(); // We don't want to submit this fake form
  addBookDialog.close(); // Have to send the select box value here.
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.value = "";
});
