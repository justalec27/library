const myLibrary = []


function Book(title, author, pages, read) {
  if (!new.target){
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readstatus = read;
  this.info = function() {
    return (`${title} by ${author}, ${pages} pages, ${read}.`)
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

let entry = myLibrary[0] ; 
console.log(entry)
const key = Object.keys(entry)[0];
console.log(key)





