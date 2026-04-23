console.log("Working Properly!");

let myLibrary = [
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

myLibrary= myLibrary.map((book)=>{
    return {
        ...book,
        id: crypto.randomUUID()
    }
});

console.log(myLibrary);

const libraryGrid = document.querySelector(".library-grid");


function Book(title, author, pages, id){ //Factory function to make a "Book"
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.readStatus= false;
    this.id= id;
}

Book.prototype.toggleRead= function() {
    this.readStatus= !this.readStatus
}

function Logger(title, author, pages){ // Function to make a book and add it to the Array [myLibrary]
    let uniqueID= crypto.randomUUID();
    console.log(uniqueID);
    let book = new Book(title, author, pages, uniqueID);
    console.log(book);
    myLibrary.push(book);
    console.log(myLibrary[myLibrary.length-1]);
}

function removeBook(id){ //removes book with a generated custom id from both DOM and DB [To be used as a callback function]
    
    //Removes from array
    myLibrary= myLibrary.filter(book=> book.id != id);

    //Removes from DOM 
    const cardToRemove = document.querySelector(`[data-id="${id}"]`).closest(".card");
    cardToRemove.remove();
}

function cardMaker(target){ // Makes a card for display at home page. [DOM manipulation]_______input is the object stored in [myLibray]
    const card= document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", target.id);

    const author= document.createElement("p");
    author.classList.add("author");
    author.innerText= `${target.author}`;

    const title= document.createElement("p");
    title.classList.add("title");
    title.innerText= `${target.title}`;

    const read_Status= document.createElement("button");
    read_Status.classList.add("readStatus");
    read_Status.innerText= `Not Read`;
    read_Status.classList.add("read-false");

    read_Status.addEventListener("click", (e)=>{//button function to change class from "read" to "unread"
        if(target.readStatus===true) {
            read_Status.innerText= "Read";
            read_Status.classList.add("read-true");
            read_Status.classList.remove("read-false");
            target.readStatus= false;
        } else {
            read_Status.innerText= "Not Read";
            read_Status.classList.remove("read-true");
            read_Status.classList.add("read-false");
            target.readStatus= true;
        }
    });

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.innerText= `${target.pages}`

    const lowBar = document.createElement("div");
    lowBar.classList.add("low-bar");

    const rmvbtn = document.createElement("button");
    rmvbtn.classList.add("remove");
    rmvbtn.innerText= "remove";
    rmvbtn.addEventListener("click", (e)=>{removeBook(target.id)});


    lowBar.append(pages, read_Status);
    card.append(title, author, lowBar, rmvbtn);
    libraryGrid.appendChild(card)
}

function displayer(){
    for(item of myLibrary){
        console.log(item.author);
        cardMaker(item);
    }
}

const submitButton= document.getElementById("submit");
submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const __author= document.getElementById("author");
    const __title = document.getElementById("title");
    const __pages = document.getElementById("pages");
    console.log(__title.value)
    Logger(__title.value, __author.value, __pages.value);
    __title.value="";
    __author.value= "";
    __pages.value= "";
})

displayer();