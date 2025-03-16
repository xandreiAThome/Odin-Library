const myLibrary = [];
const mainDiv = document.querySelector("main");
const addModal = document.getElementById("addModal");
const addBookButton = document.getElementById("submit");
const addButton = document.getElementById("add");
const bookForm = document.getElementById("bookForm");

function Book(name, author, pages, read) {
  if (!new.target) {
    throw Error("must be used with new keyword");
  }

  this.name = name;
  this.author = author;
  this.id = crypto.randomUUID();
  this.pages = pages;
  this.read = read;
}

function displayBooks() {}

addButton.addEventListener("click", () => {
  addModal.showModal();
});

bookForm.addEventListener("submit", (e) => {
  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData);

  const finishedReading = entries.read === "on" || false;

  const newBook = new Book(
    entries.title,
    entries.author,
    entries.pages,
    finishedReading
  );

  myLibrary.push(newBook);

  console.log(myLibrary);

  addModal.close();

  bookForm.reset();
});

window.onclick = function (event) {
  if (event.target == addModal) {
    addModal.close();
  }
};
