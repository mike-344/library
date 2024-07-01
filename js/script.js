const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary(library, book){
    library.push(book);
     
}


const libraryGrid = document.querySelector(".library-section")

function displayBook(library){
    library.forEach((book) => {
        const div = document.createElement("div");
        div.textContent = book.info();
        libraryGrid.appendChild(div);
    })
}


function displayBookRevised(library){
    const div = document.createElement("div");
        div.textContent = library[(library.length)-1].info();
        libraryGrid.appendChild(div);
        div.setAttribute("indexNumber", library.length-1);
       const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"
        div.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            deleteButton.parentNode.parentNode.removeChild(div);
            let ind = +(deleteButton.parentNode.getAttribute("indexNumber"));
            library.splice(ind, 1);
        })

}

let newBookButton = document.querySelector(".new-book");
let newBookForm = document.querySelector("form");
newBookForm.style.visibility = "hidden";

newBookButton.addEventListener("click", () => {
    newBookForm.style.visibility = "visible"
    
})

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");



const addBookButton = document.querySelector(".add-book")


addBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(title.value, author.value, pages.value, read.value);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
    addBookToLibrary(myLibrary, newBook);
    
    newBookForm.style.visibility = "hidden";
    displayBookRevised(myLibrary);
    
})
