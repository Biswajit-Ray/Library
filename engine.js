const { createElement } = require("react");

console.log("Working Properly!");

const myLibrary = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, readStatus: false, id: 69420 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, readStatus: false, id: 69420 },
    { title: "1984", author: "George Orwell", pages: 328, readStatus: false, id: 69420 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, readStatus: false, id: 69420 },
    { title: "Brave New World", author: "Aldous Huxley", pages: 268, readStatus: false, id: 69420 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234, readStatus: false, id: 69420 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", pages: 158, readStatus: false, id: 69420 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, readStatus: false, id: 69420 },
    { title: "The Old Man and the Sea", author: "Ernest Hemingway", pages: 127, readStatus: false, id: 69420 },
    { title: "The Road", author: "Cormac McCarthy", pages: 287, readStatus: false, id: 69420 },
    { title: "Moby Dick", author: "Herman Melville", pages: 635, readStatus: false, id: 69420 },
    { title: "Dune", author: "Frank Herbert", pages: 412, readStatus: false, id: 69420 },
    { title: "The Shining", author: "Stephen King", pages: 447, readStatus: false, id: 69420 },
    { title: "Circe", author: "Madeline Miller", pages: 393, readStatus: false, id: 69420 },
    { title: "Neuromancer", author: "William Gibson", pages: 271, readStatus: false, id: 69420 }
];

const libraryGrid = document.querySelector(".library-grid");


function Book(title, author, pages, id){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.readStatus= false;
    this.id= id;
}

function Logger(title, author, pages){
    let uniqueID= 69420;
    console.log(uniqueID);
    let book = new Book(title, author, pages, uniqueID);
    console.log(book);
    myLibrary.push(book);
    console.log(myLibrary[myLibrary.length-1]);
}

function cardMaker(this){
    const card= document.createElement("div");
    card.classList.add("card");

    const author= document.createElement("p");
    author.classList.add(".author");
    author.innerText= `${this.author}`;

    const title= document.createElement("p");
    title.classList.add(".title");
    title.innerText= `${this.title}`;

    const read_Status= document.createElement("p");
    read_Status.classList.add(".readStatus");
    if(this.readStatus===true) {
        read_Status.innerText= "Read";
        read_Status.classList.add(".read-true");        
    } else {
        read_Status.innerText= "Not Read";
        read_Status.classList.add(".read-false");
    }

    const pages = document.createElement("p");
    pages.classList.add(".pages");
    pages.innerText= `${this.pages}`

    const lowBar = document.createElement("div");
    lowBar.classList.add(".low-bar");

    lowBar.append(pages, read_Status);
    card.append(title, author, lowBar);
}

function displayer(){
    for(let item of myLibrary ){
        console.log(item.author);
    }
}