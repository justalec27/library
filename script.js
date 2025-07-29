
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


function addBookToLibrary(book, array) {
    const object = book;
    const id = crypto.randomUUID();
    array.push({[id] : object});
}

console.log(myLibrary); //check-in

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 598, "not read yet")
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
const atomicHabits = new Book("Atomic Habits", "James Clear", 548, "already read")
const atomicHabits2 = new Book("Atomic Habits", "James Clear", 548, "already read")


addBookToLibrary(harryPotter, myLibrary)
addBookToLibrary(theHobbit, myLibrary)
addBookToLibrary(atomicHabits, myLibrary)
addBookToLibrary(atomicHabits2, myLibrary)

const books = document.querySelector(".books")

for (let i of myLibrary){
    console.log(i);
    const value = Object.values(i)[0];
    console.log(value.title);  //check-in
    console.log(value.author); //check-in
    console.log(value.info()); //check-in
    const para = document.createElement("p");
    const node = document.createTextNode(value.info());
    para.appendChild(node);
    books.appendChild(para);

}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".new-book");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("submit-btn")

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
event.preventDefault()
})


