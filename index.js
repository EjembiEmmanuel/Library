let myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookLibrary(title, author, pages, status) {
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
            </tr>   
        `
    }
}


// Get the modal
let modal = document.getElementById("bookModal");

// Get the button that opens the modal
let btn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
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
 
    addBookLibrary(title.value, author.value, pages.value, status.value)
    displayBooks()

    console.log(myLibrary)

    modal.style.display = "none";
});