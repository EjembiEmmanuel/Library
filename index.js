let myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookLibrary() {
    let title = prompt("Please enter the book's title", "Book title")
    let author = prompt("Please enter the book's author", "Book author")
    let pages = prompt("Please enter the book's number of pages ", "Number of book's pages")
    let readStatus = prompt("Have you read this book? Enter Yes or No", "Yes or No")

    let newBook = new Book(title, author, pages, readStatus)

    myLibrary.push(newBook)
}

addBookLibrary()
addBookLibrary()

function displayBooks() {
    const table = document.querySelector('.table')

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
        // const bookCard = document.createElement('div')

        // const bookTitle = document.createElement('h1')
        // const bookAuthor = document.createElement('p')
        // const pages = document.createElement('p')
        // const readStatus = document.createElement('p')

        // bookTitle.textContent = `Title: ${book.title}`
        // bookAuthor.textContent = `Author: ${book.author}`
        // pages.textContent = `Number of pages: ${book.pages}`
        // readStatus.textContent = `Read: ${book.readStatus}`

        // bookCard.appendChild(bookTitle)
        // bookCard.appendChild(bookAuthor)
        // bookCard.appendChild(pages)
        // bookCard.appendChild(readStatus)

        // body.appendChild(bookCard)
    }
}

displayBooks()

console.log(myLibrary)