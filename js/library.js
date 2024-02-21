const myLibrary = [];

const addBookButton = document.getElementById("showAddBookDialog");
const addBookDialog = document.getElementById("addBookDialog");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

// "Show the dialog" button opens the <dialog> modally
addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
  });