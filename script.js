let myLibrary = [];

function Book(title, author, pageNo, readStatus) {
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
  this.readStatus = readStatus;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pageNo}, ${this.readStatus}`;
};
//addBook will add a book at the end of the myLibrary[]
function addBook(title, author, pageNo, readStatus) {
  myLibrary.push(new Book(title, author, pageNo, readStatus));
}
//to loop every book in myLibrary
function checkLibrary() {
  for (const book of myLibrary) {
    console.log(book.info());
  }
}
//get information from user and add a Book to myLibrary
function getInformation() {
  let title = window.prompt("Title", null);
  let author = window.prompt("Author", null);
  let pageNo = window.prompt("No. of pages", null);
  let readStatus = window.prompt("Read book?", null);
  addBook(title, author, pageNo, readStatus);
}
// update the library in dom
function updateLibrary() {
  const bookTile = document.createElement("div");

  const removeButton = document.createElement("button");
  removeButton.textContent = "x";
  removeButton.classList.add("removeButton");
  bookTile.appendChild(removeButton);

  const title = document.createElement("div");
  title.textContent = `${myLibrary[myLibrary.length - 1].title}`;
  bookTile.appendChild(title);

  const author = document.createElement("div");
  author.textContent = `${myLibrary[myLibrary.length - 1].author}`;
  bookTile.appendChild(author);

  const pageNo = document.createElement("div");
  pageNo.textContent = `${myLibrary[myLibrary.length - 1].pageNo} pages`;
  bookTile.appendChild(pageNo);

  const readStatus = document.createElement("div");
  readStatus.textContent = `${myLibrary[myLibrary.length - 1].readStatus}`;
  bookTile.appendChild(readStatus);

  bookTile.classList.add("tile");
  addButton.before(bookTile);
}
// remove the tile from dom
function removeTile(removeButton) {
  removeButton.parentElement.remove();
}

function removeFromMyLibrary(removeButton) {
  let arrayIndex = null;
  console.log(removeButton.nextElementSibling.textContent);
  const title = removeButton.nextElementSibling.textContent;
  for (let i = 0; i < myLibrary.length - 1; i++) {
    if (myLibrary[i].title == title) {
      arrayIndex = i;
      console.log(arrayIndex);
      break;
    }
  }
  myLibrary.splice(arrayIndex, 1);
}
//removeButtons event listener
function reinitRemoveButtonsListener() {
  const removeButtons = Array.from(document.querySelectorAll(".removeButton"));
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      removeFromMyLibrary(removeButton);
      removeTile(removeButton);
    });
  });
}

const addButton = document.querySelector(".addTile");
addButton.addEventListener("click", () => {
  getInformation();
  updateLibrary();
  reinitRemoveButtonsListener(); //will initailize remove buttons event listener each time a new book is added
});
