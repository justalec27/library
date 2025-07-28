/*
<div class="book-card">
                    <div class="inner-box">
                        <p class="title">Title:</p>
                        <p class="author">Author:</p>
                        <p class="pages">Pages:</p>
                        <p class="status">Status:</p>
                        <p class="book-id">Book ID:</p>
                    </div>
                </div>



*/



const myLibrary = []

const innerBox= document.querySelector(".bottom-section .inner-box")

function createCard(title, author, pages, status, bookId) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    innerBox.appendChild(bookCard)
    const cardInnerBox = document.createElement("div")
    cardInnerBox.classList.add("inner-box")
    bookCard.appendChild(cardInnerBox)
    const title = document.createElement("p")
    const node = document.createTextNode("Title")
    bookCard.appendChild(title)
    title.appendChild(node)
    const author = document.createElement("p")
    const node2 = document.createTextNode("Author")
    bookCard.appendChild(author)
    author.appendChild(node2)
     const pages = document.createElement("p")
    const node3 = document.createTextNode("Pages:")
    bookCard.appendChild(pages)
    pages.appendChild(node3)
     const status = document.createElement("p")
    const node4 = document.createTextNode("Status:")
    bookCard.appendChild(status)
    status.appendChild(node4)
     const bookId = document.createElement("p")
    const node5 = document.createTextNode("Book ID:")
    bookCard.appendChild(bookId)
    bookId.appendChild(node5)

}

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


function addBookToLibrary(book, array) {
    const object = book;
    const id = crypto.randomUUID();
    array.push({[id] : object});
}

console.log(myLibrary);

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 598, "not read yet")
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
const atomicHabits = new Book("Atomic Habits", "James Clear", 548, "already read")


addBookToLibrary(harryPotter, myLibrary)
addBookToLibrary(theHobbit, myLibrary)
addBookToLibrary(atomicHabits, myLibrary)

const books = document.querySelector(".books")

for (let i of myLibrary){
    console.log(i);
    const value = Object.values(i)[0];
    console.log(value.title)
    console.log(value.author)
    console.log(value.info());
    const para = document.createElement("p")
    const node = document.createTextNode(value.info());
    para.appendChild(node)
    books.appendChild(para)
    createCard();

}





/* NEXT STEPS:
    The loop is working to get the titles from the array.
    1. Make sure the data is printed on the UI
    2. Create a box for the info
    3. Look in to how to print the info on the screen.

    UPDATE evening:
    I created a function for the cards. Now I need to make the function created the correct content.
    The function should take arguments from the loop.

*/




