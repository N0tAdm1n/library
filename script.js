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
//check if a book already exists in myLibrary
function checkLibrary(title) {
  for (const book of myLibrary) {
    if (title == book.title) return false;
  }
  return true;
}
//get information from user and add a Book to myLibrary
function getInformation() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pageNo = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#isRead").checked;
  if (title == "" || author == "" || pageNo == "") {
    getInformation();
  }
  if (checkLibrary(title)) {
    addBook(title, author, pageNo, readStatus);
    return true;
  } else return false;
}
// update the library in dom
function updateLibrary() {
  const bookTile = document.createElement("div");

  const removeButton = document.createElement("button");
  removeButton.textContent = "delete";
  removeButton.classList.add("material-icons-outlined", "remove-button");
  bookTile.appendChild(removeButton);

  const title = document.createElement("div");
  title.textContent = `${myLibrary[myLibrary.length - 1].title}`;
  title.classList.add("title");
  bookTile.appendChild(title);

  const author = document.createElement("div");
  author.textContent = `${myLibrary[myLibrary.length - 1].author}`;
  author.classList.add("author");
  bookTile.appendChild(author);

  const pageNo = document.createElement("div");
  pageNo.textContent = `${myLibrary[myLibrary.length - 1].pageNo} pages`;
  pageNo.classList.add("pageNo");
  bookTile.appendChild(pageNo);

  const readStatus = document.createElement("div");
  readStatus.classList.add("readStatus");
  if (myLibrary[myLibrary.length - 1].readStatus) {
    readStatus.textContent = `Completed`;
  } else {
    readStatus.textContent = `Not Started`;
    readStatus.classList.add("not-started");
  }
  bookTile.appendChild(readStatus);

  bookTile.classList.add("tile");
  addButton.before(bookTile);
}
// remove the tile from dom
function removeTile(removeButton) {
  removeButton.parentElement.remove();
}

function removeFromMyLibrary(removeButton) {
  let arrayIndex;
  const title = removeButton.nextElementSibling.textContent;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title == title) {
      arrayIndex = i;
      myLibrary.splice(arrayIndex, 1);
      break;
    }
  }
}
//will clear the values in the form
function clearForm() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pageNo = document.querySelector("#pages");
  const readStatus = document.querySelector("#isRead");
  title.value = "";
  author.value = "";
  pageNo.value = "";
  readStatus.checked = false;
}

//removeButtons event listener
function reinitRemoveButtonsListener() {
  const removeButtons = Array.from(document.querySelectorAll(".remove-button"));
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener(
      "click",
      () => {
        removeFromMyLibrary(removeButton);
        removeTile(removeButton);
      },
      { once: true }
    );
  });
}
const form = document.querySelector(".get-data-form"); //form
//for the big plus button
const addButton = document.querySelector(".add-tile");
addButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
});
//for the add button on pop up
const addBookButton = document.querySelector(".add-button");
addBookButton.addEventListener("click", () => {
  if (getInformation()) {
    updateLibrary();
    reinitRemoveButtonsListener(); //will initailize remove buttons event listener each time a new book is added
    initNotCompletedEventListener(); //will initailize cot-completed event listener
    form.classList.toggle("hidden");
  }
  clearForm();
});
//for cancel button on popup
const cancelBookButton = document.querySelector(".cancel-button");
cancelBookButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
  clearForm();
});
// event listener for not completed
function initNotCompletedEventListener() {
  const notStarted = Array.from(document.querySelectorAll(".not-started"));
  notStarted.forEach((item) => {
    item.addEventListener("click", () => {
      item.textContent = "Completed";
      item.classList.remove("not-started");
    });
  });
}
