console.log("Log your read books! :D");
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.bookCount = 1;
    this.books = [];

    this.markRead = this.markRead.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  markRead(checkbox) {
    for (let book of library.books) {
      if (book.id == checkbox.id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }

  addBook() {
    let title = document.querySelector("#titleInput").value;
    let bookAuthor = document.querySelector("#authorInput").value;
    let read = document.querySelector("#readCheckbox").checked;
    console.log(read);

    let newBook = new Book(this.bookCount, title, bookAuthor, read);
    this.books.push(newBook);

    const newRow = document.createElement("tr");
    const table1 = document.createElement("td");
    table1.textContent = newBook.title;
    const table2 = document.createElement("td");
    table2.textContent = newBook.author;

    const table3 = document.createElement("td");
    const cBox = document.createElement("input");
    cBox.id = this.bookCount;
    cBox.type = "checkbox";
    cBox.checked = newBook.read;
    cBox.disabled = newBook.read;
    cBox.addEventListener("click", () => {
      library.markRead(cBox);
    });
    table3.append(cBox);
    newRow.append(table1);
    newRow.append(table2);
    newRow.append(table3);
    const tBody = document.querySelector("tbody");
    tBody.append(newRow);

    this.bookCount++;
  }
}
let library = new Library();
let btn = document.querySelector("#addButton");
btn.addEventListener("click", () => {
  library.addBook(library.books, library.bookCount);
});
