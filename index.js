let myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBook(title, author, pages, status) {
    let newBook = new Book(title, author, pages, status)

    myLibrary.push(newBook)
}


function displayBooks() {
    const table = document.querySelector('.table')

    table.innerHTML = `
        <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Status</th>
            <th>&nbsp;</th>
        </tr>
    `

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i]

        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.readStatus}</td>
                <td><button id="deleteBtn${i}" data-key="${i}" onclick="deleteBook(this.dataset.key)"><img src="assets/icons/delete.svg" alt=""></button></td>
            </tr>   
        `
    }
}

function deleteBook(key) {
    let index = Number(key)

    myLibrary.splice(index, 1)

    displayBooks()
}

let modal = document.getElementById("bookModal");
let addBtn = document.getElementById("addBtn");
let span = document.getElementsByClassName("close")[0];

addBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let bookForm = document.getElementById("bookForm")

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let status = document.getElementById("status");
 
    addBook(title.value, author.value, pages.value, status.value)
    displayBooks()

    modal.style.display = "none";
});