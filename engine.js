console.log("Working Properly!");

const myLibrary = [];

function book(title, author, pages){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.readStatus= false;
}

function Logger(title, author, pages){
    let bookName= crypto.randomUUID();
    console.log(bookName);
    bookName= new book (title, author, pages);
    myLibrary.push(bookName);
    console.log(myLibrary);
}