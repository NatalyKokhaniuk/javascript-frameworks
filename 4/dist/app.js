import { BookService, UserService } from "./services";
import { Validation } from "./validation";
import { Modal } from "./modal";
class App {
  constructor() {
    this.addBook = () => {
      const titleInput = document.getElementById("bookTitle");
      const authorInput = document.getElementById("bookAuthor");
      const yearInput = document.getElementById("bookYear");
      const title = titleInput.value;
      const author = authorInput.value;
      const year = parseInt(yearInput.value, 10);
      const errors = Validation.validateBook(title, author, year.toString());
      if (Object.keys(errors).length > 0) {
        Validation.displayErrors(errors);
        return;
      }
      const success = this.bookService.addBook(title, author, year);
      if (success) {
        this.clearValidationErrors();
        Modal.showSuccessModal("Книгу '" + title + "' успішно додано!");
        titleInput.value = "";
        authorInput.value = "";
        yearInput.value = "";
        this.displayBooks();
      } else {
        Modal.showSuccessModal("Не вдалося додати книгу.");
      }
    };
    this.addUser = () => {
      const nameInput = document.getElementById("userName");
      const emailInput = document.getElementById("userEmail");
      const name = nameInput.value;
      const email = emailInput.value;
      const errors = Validation.validateUser(name, email);
      if (Object.keys(errors).length > 0) {
        Validation.displayErrors(errors);
        return;
      }
      const success = this.userService.addUser(name, email);
      if (success) {
        this.clearValidationErrors();
        Modal.showSuccessModal("Користувача " + name + " успішно додано!");
        nameInput.value = "";
        emailInput.value = "";
        this.displayUsers();
      } else {
        Modal.showSuccessModal("Не вдалося додати користувача " + name + ".");
      }
    };
    this.initEventListeners = () => {
      document
        .getElementById("addBookBtn")
        ?.addEventListener("click", this.addBook);
      document
        .getElementById("addUserBtn")
        ?.addEventListener("click", this.addUser);
      document
        .getElementById("booksList")
        ?.addEventListener("click", this.handleBookAction);
    };
    this.displayBooks = () => {
      const booksListElement = document.getElementById("booksList");
      if (booksListElement) {
        booksListElement.innerHTML = this.bookService
          .getAllBooks()
          .map((book) => this.createBookListItem(book))
          .join("");
      }
    };
    this.createBookListItem = (book) => {
      const buttonClass = book.isBorrowed ? "btn-warning" : "btn-primary";
      const buttonText = book.isBorrowed ? "Повернути" : "Позичити";
      return `
          <li class="d-flex justify-content-between align-items-center mb-2">
              <span>${book.title} by ${book.author} (${book.year})</span>
              <button class="btn ${buttonClass} btn-sm" data-book-id="${book.id}" data-action="${book.isBorrowed ? "return" : "borrow"}">${buttonText}</button>
          </li>`;
    };
    this.displayUsers = () => {
      const usersListElement = document.getElementById("usersList");
      if (usersListElement) {
        usersListElement.innerHTML = this.userService
          .getAllUsers()
          .map(
            (
              user,
            ) => `<li class="d-flex justify-content-between align-items-center mb-2">${user.name} (${user.email}) - ID: ${user.id} - Позичені книги: ${user.borrowedBooks.length}
          </li>`,
          )
          .join("");
      }
    };
    this.handleBookAction = (event) => {
      const target = event.target;
      if (target.tagName === "BUTTON") {
        const bookId = target.getAttribute("data-book-id");
        const userId = target.getAttribute("data-user-id");
        const action = target.getAttribute("data-action");
        if (bookId && action) {
          if (action === "borrow") {
            this.showBorrowBookModal(bookId);
          } else if (action === "return") {
            this.returnBook(bookId);
          } else if (action === "delete") {
            this.deleteBook(bookId);
          }
        }
      }
    };
    this.showBorrowBookModal = (bookId) => {
      Modal.showBorrowBookModal(bookId, (userId) =>
        this.borrowBook(bookId, userId),
      );
    };
    this.deleteBook = (bookId) => {
      this.bookService.removeBook(bookId);
      this.displayBooks();
    };
    this.deleteUser = (userId) => {
      this.userService.removeUser(userId);
    };
    this.borrowBook = (bookId, userId) => {
      try {
        this.bookService.borrowBook(bookId);
        this.userService.borrowBook(userId, bookId);
        Modal.showSuccessBookActionModal("borrowed");
        this.displayBooks();
        this.displayUsers();
      } catch (error) {
        if (
          error instanceof Error &&
          error.message === "Користувач не може позичити більше 3-х книг"
        ) {
          Modal.showErrorModal("Помилка позичення книги", error.message);
        } else {
          Modal.showErrorModal(
            "Помилка позичення книги",
            "Не вдалося позичити книгу.",
          );
        }
        this.updateBookButtonState(bookId, false);
      }
    };
    this.updateBookButtonState = (bookId, isBorrowed) => {
      const bookElement = document.querySelector(`[data-book-id="${bookId}"]`);
      if (bookElement) {
        if (isBorrowed) {
          bookElement.textContent = "Повернути";
          bookElement.classList.remove("btn-primary");
          bookElement.classList.add("btn-warning");
          bookElement.setAttribute("data-action", "return");
        } else {
          bookElement.textContent = "Позичити";
          bookElement.classList.remove("btn-warning");
          bookElement.classList.add("btn-primary");
          bookElement.setAttribute("data-action", "borrow");
        }
      }
    };
    this.returnBook = (bookId) => {
      try {
        const user = this.userService.getUserByBookId(bookId);
        if (user) {
          this.bookService.returnBook(bookId);
          this.userService.returnBook(user.id, bookId);
          Modal.showSuccessBookActionModal("returned");
          this.displayBooks();
          this.displayUsers();
        }
      } catch (error) {
        console.error("Error returning book:", error);
        Modal.showErrorModal(
          "Помилка повернення книги",
          "Не вдалося повернути книгу.",
        );
      }
    };
    this.bookService = new BookService();
    this.userService = new UserService();
    this.initEventListeners();
    this.displayBooks();
    this.displayUsers();
  }
  clearValidationErrors() {
    const errorElements = document.querySelectorAll(
      ".is-invalid, .border-danger",
    );
    errorElements.forEach((element) => {
      element.classList.remove("is-invalid", "border-danger");
    });
    const errorMessages = document.querySelectorAll(
      ".invalid-feedback, .text-danger",
    );
    errorMessages.forEach((element) => {
      element.remove();
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
//# sourceMappingURL=app.js.map
