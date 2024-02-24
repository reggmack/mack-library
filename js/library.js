const addBookButton = document.getElementById("showAddBookDialog");
const addBookDialog = document.getElementById("addBookDialog");
const createBookButton = addBookDialog.querySelector("#createBookButton");
const bookContainer = document.querySelector("#bookContainer");
let inputAuthor;
let inputTitle;
let inputPages;
let inputRead;

let myLibrary = [];

// Add default Books to Library
const addBookToLibrary = (book) => myLibrary.push(book);
addBookToLibrary(new Book("Book 1", "Author 1", "1", false));
addBookToLibrary(new Book("Book 2", "Author 2", "2", true));
addBookToLibrary(new Book("Book 3", "Author 3", "3", false));
addBookToLibrary(new Book("Book 4", "Author 4", "4", true));
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", "295", false));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

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
  newBook.read = inputRead.checked;
  // Add new book to Library
  myLibrary.push(newBook);
  bookContainer.textContent = "";
  showBooks();
}

function showBooks() {
  bookContainer.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const catalogCard = document.createElement("div");
    catalogCard.classList = "catalogCard";
    catalogCard.innerHTML = `
    <h2>${myLibrary[i].title}</h2>
    <div>${myLibrary[i].author}</div>
    <div>Pages: ${myLibrary[i].pages}</div>
    <div class="bookButtons">
    <button class="${myLibrary[i].read ? "isRead" : "notRead"}" onclick="toggleRead(${i}">
    ${myLibrary[i].read ? "Read" : "Not Read"}</button>
    <button class="btnDelete" onclick="deleteBook(${i})">Delete</button>
    </div>
    `;
    bookContainer.appendChild(catalogCard);
  }
}
showBooks();

function deleteBook(index) {
  myLibrary.splice(index, 1);
  showBooks();
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  showBooks();
}

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
  inputRead.checked = false;
});
