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

const addButton = document.querySelector(".addTile");
addButton.addEventListener("click", () => {
  getInformation();
});
