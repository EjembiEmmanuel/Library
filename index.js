let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.readStatus = function (readStatus) {
  this.readStatus = readStatus;
};

function addBook(title, author, pages, status) {
  let newBook = new Book(title, author, pages);

  newBook.readStatus(status);

  myLibrary.push(newBook);
}

function displayBooks() {
  const table = document.querySelector(".table");

  table.innerHTML = `
        <tr>
            <th style="width: 5%">&nbsp;</th>
            <th style="width: 30%">Title</th>
            <th style="width: 15%">Author</th>
            <th style="width: 15%">Pages</th>
            <th style="width: 10%">Status</th>
            <th style="width: 25%" colspan="2">Change Status/Delete</th>
        </tr>
    `;

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    if (book.readStatus === "Read") {
      table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.pages}</td>
                    <td>
                        ${book.readStatus}
                    </td>
                    <td>
                        Mark as read: 
                        <label class="switch">
                            <input id="toggleBtn${i}" type="checkbox" data-key="${i}" onclick="toggleStatus(this.id)" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td><button id="deleteBtn${i}" data-key="${i}" onclick="deleteBook(this.dataset.key)"><img src="assets/icons/delete.svg" alt=""></button></td>
                </tr>   
            `;
    } else {
      table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.pages}</td>
                    <td>
                        ${book.readStatus}
                    </td>
                    <td>
                        Mark as read: 
                        <label class="switch">
                            <input id="toggleBtn${i}" type="checkbox" data-key="${i}" onclick="toggleStatus(this.id)">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td><button id="deleteBtn${i}" data-key="${i}" onclick="deleteBook(this.dataset.key)"><img src="assets/icons/delete.svg" alt=""></button></td>
                </tr>   
            `;
    }
  }
}

function updateLog() {
  let totalBooks = document.querySelector(".no-books").firstElementChild;
  let readBooksElement = document.querySelector(".read").firstElementChild;
  let unreadBoksElement = document.querySelector(".unread").firstElementChild;

  totalBooks.textContent = `Total number of books: ${myLibrary.length}`;

  let readBooks = 0;
  let unreadBooks = 0;

  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].readStatus === "Read") {
      readBooks += 1;
    } else {
      unreadBooks += 1;
    }
  }

  readBooksElement.textContent = `Read: ${readBooks}`;
  unreadBoksElement.textContent = `Unread: ${unreadBooks}`;
}

function toggleStatus(id) {
  let toggleBtn = document.getElementById(id);
  let index = Number(toggleBtn.dataset.key);

  if (toggleBtn.checked) {
    myLibrary[index].readStatus = "Read";
  } else {
    myLibrary[index].readStatus = "Unread";
  }

  updateLog();
  displayBooks();
}

function deleteBook(key) {
  let index = Number(key);

  myLibrary.splice(index, 1);

  updateLog();
  displayBooks();
}

let modal = document.getElementById("bookModal");
let addBtn = document.getElementById("addBtn");
let span = document.getElementsByClassName("close")[0];

addBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let status = document.getElementById("status");

  addBook(title.value, author.value, pages.value, status.value);

  updateLog();
  displayBooks();

  modal.style.display = "none";
});
