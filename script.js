let myLibrary = [];

function Book(title, author, pageNo, readStatus) {
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.readStatus = readStatus;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pageNo}, ${readStatus}`;
    }
}

function addBook(title, author, pageNo, readStatus) {
    myLibrary.push(Book(title,author,pageNo,readStatus));
}