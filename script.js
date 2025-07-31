
const myLibrary = []

const innerBox= document.querySelector(".bottom-section .inner-box")


function Book(title, author, pages, read) {
  if (!new.target){
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readstatus = read;
  this.info = function() {
    return (`${title} by ${author}, ${pages} pages, ${read}`)
  }
}

Book.prototype.changeReadStatus = function(){
    if (this.readstatus === "already read"){
        this.readstatus = "not read yet";     
    }   else {
        this.readstatus = "already read";
    }
}


function addBookToLibrary(book, array) {
    const object = book;
    const id = crypto.randomUUID();
    array.push({[id] : object});
}

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 598, "not read yet")
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
const atomicHabits = new Book("Atomic Habits", "James Clear", 548, "already read")


addBookToLibrary(harryPotter, myLibrary)
addBookToLibrary(theHobbit, myLibrary)
addBookToLibrary(atomicHabits, myLibrary)

const books = document.querySelector(".books")


function displayBook(){

    for (let i of myLibrary){
        //key book properties from book
        const value = Object.values(i)[0];
        const key = Object.keys(i)[0];

        const para = document.createElement("p");
        para.classList.add("single-book")
        para.dataset.id = key
        books.appendChild(para);
        
        const paraTitle = document.createElement("p");
        para.appendChild(paraTitle)

        const nodeTitle = document.createTextNode(`Title: ${value.title}`)
        paraTitle.appendChild(nodeTitle)

        const paraAuthor = document.createElement("p");
        para.appendChild(paraAuthor)

        const nodeAuthor = document.createTextNode(`Author: ${value.author}`)
        paraAuthor.appendChild(nodeAuthor)

        const paraPages = document.createElement("p");
        para.appendChild(paraPages)

        const nodePages = document.createTextNode(`Pages: ${value.pages}`)
        paraPages.appendChild(nodePages)

        const paraStatus = document.createElement("p");
        para.appendChild(paraStatus)

        const nodeStatus = document.createTextNode(`Read status: ${value.readstatus}`)
        paraStatus.appendChild(nodeStatus)

        const paraId = document.createElement("p");
        para.appendChild(paraId)

        const nodeId = document.createTextNode(`Book ID: ${key}`)
        paraId.appendChild(nodeId)

        //Add delete button to book
        const button = document.createElement("button")
        button.textContent = "Delete book"
        button.classList.add("delete-book")
        para.appendChild(button)

        // Delete book from UI
        button.addEventListener("click", () => {
        para.remove()
        })

        //Add button to change readStatus
        const readStatusBtn = document.createElement("button")
        readStatusBtn.textContent = "Change read status"
        readStatusBtn.classList.add("change-read-status")
        para.appendChild(readStatusBtn)

        readStatusBtn.addEventListener("click", () => {
            value.changeReadStatus(); // use the prototype method
            nodeStatus.nodeValue = `Read status: ${value.readstatus}`;
        })

    }
    }

displayBook()

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".new-book");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("#submit-btn")

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});


// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


// "Submit" the details in the dialog


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value
    const author = document.querySelector("#author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("yes").checked ? "already read" : "not read yet"

    const newBook = new Book(title, author, pages, read)
    addBookToLibrary(newBook, myLibrary)
    showBooks()  // change that it only goes through the last added array item
   
    dialog.close();
});


/* 
NOTE: 
The dialog is not adding book to the library yet. Needs update.
UPDATE: I solved how to add a new book the page. Check row 146 again


*/