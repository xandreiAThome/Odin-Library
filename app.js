let myLibrary = [];
const mainDiv = document.querySelector("main");
const addModal = document.getElementById("addModal");
const addBookButton = document.getElementById("submit");
const addButton = document.getElementById("add");
const bookForm = document.getElementById("bookForm");
const exitModal = document.getElementById("exit");

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.id = crypto.randomUUID();
    this.pages = pages;
    this.read = read;
  }

  changeReadStatus(read) {
    this.read = read;
  }
}

exitModal.onclick = () => {
  addModal.close();
};

function displayBooks() {
  mainDiv.innerHTML = "";
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const read = document.createElement("label");
    pages.innerText = `No. of Pages: ${book.pages}`;
    author.innerText = `Author: ${book.author}`;
    title.innerText = book.name;
    read.innerText = "Finished Reading?";

    card.dataset.id = book.id;

    const remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.classList.add("remove");
    remove.dataset.id = book.id;
    remove.onclick = (e) => {
      e.preventDefault();
      myLibrary = myLibrary.filter((book) => {
        return remove.dataset.id !== book.id;
      });
      displayBooks();
    };

    const readStatus = document.createElement("input");
    readStatus.dataset.id = book.id;
    readStatus.type = "checkbox";
    readStatus.checked = book.read;
    readStatus.onclick = (e) => {
      myLibrary.forEach((book) => {
        if (book.id === e.target.dataset.id) {
          book.changeReadStatus(e.target.checked);
        }
      });
      console.log(myLibrary);
    };

    card.classList.add("bookCard");

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    const divTemp = document.createElement("div");
    divTemp.appendChild(read);
    divTemp.appendChild(readStatus);
    card.appendChild(divTemp);
    card.appendChild(document.createElement("br"));
    card.appendChild(remove);
    mainDiv.appendChild(card);
  });
}

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

  displayBooks();

  addModal.close();

  bookForm.reset();
});

window.onclick = function (event) {
  if (event.target == addModal) {
    addModal.close();
  }
};
