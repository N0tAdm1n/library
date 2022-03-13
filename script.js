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
