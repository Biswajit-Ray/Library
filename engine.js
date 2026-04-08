console.log("Working Properly!");

const myLibrary = [];

function Book(title, author, pages, id){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.readStatus= false;
    this.id= id;
}

function Logger(title, author, pages){
    let uniqueID= crypto.randomUUID();
    console.log(uniqueID);
    let book = Book(title, author, pages, id);
    console.log(book);
    myLibrary.push(book);
    console.log(myLibrary[-1]);
}

function displayer(){
    for(let item in myLibrary ){
        console.log(bookName.author);
    }
}