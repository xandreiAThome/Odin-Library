const myLibrary = [];
const mainDiv = document.querySelector("main");
const addModal = document.getElementById("addModal");

function Book(name, author, pages, read) {
  if (!new.target) {
    throw Error("must be used with new keyword");
  }

  this.name = name;
  this.author = author;
  this.id = crypto.randomUUID;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {}

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  console.log("hi");
  addModal.showModal();
});

window.onclick = function (event) {
  if (event.target == addModal) {
    addModal.close();
  }
};
