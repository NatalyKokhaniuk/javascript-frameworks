/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/app.ts":
      /*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.ts");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./src/validation.ts");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.ts");\n\n\n\nclass App {\n    constructor() {\n        this.addBook = () => {\n            const titleInput = document.getElementById("bookTitle");\n            const authorInput = document.getElementById("bookAuthor");\n            const yearInput = document.getElementById("bookYear");\n            const title = titleInput.value;\n            const author = authorInput.value;\n            const year = parseInt(yearInput.value, 10);\n            const errors = _validation__WEBPACK_IMPORTED_MODULE_1__.Validation.validateBook(title, author, year.toString());\n            if (Object.keys(errors).length > 0) {\n                _validation__WEBPACK_IMPORTED_MODULE_1__.Validation.displayErrors(errors);\n                return;\n            }\n            const success = this.bookService.addBook(title, author, year);\n            if (success) {\n                this.clearValidationErrors();\n                _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showSuccessModal("Книгу успішно додано!");\n                titleInput.value = "";\n                authorInput.value = "";\n                yearInput.value = "";\n                this.displayBooks();\n            }\n            else {\n                _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showSuccessModal("Не вдалося додати книгу.");\n            }\n        };\n        this.addUser = () => {\n            const nameInput = document.getElementById("userName");\n            const emailInput = document.getElementById("userEmail");\n            const name = nameInput.value;\n            const email = emailInput.value;\n            const errors = _validation__WEBPACK_IMPORTED_MODULE_1__.Validation.validateUser(name, email);\n            if (Object.keys(errors).length > 0) {\n                _validation__WEBPACK_IMPORTED_MODULE_1__.Validation.displayErrors(errors);\n                return;\n            }\n            const success = this.userService.addUser(name, email);\n            if (success) {\n                this.clearValidationErrors();\n                _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showSuccessModal("Користувача успішно додано!");\n                nameInput.value = "";\n                emailInput.value = "";\n                this.displayUsers();\n            }\n            else {\n                _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showSuccessModal("Не вдалося додати користувача.");\n            }\n        };\n        this.initEventListeners = () => {\n            var _a, _b, _c;\n            (_a = document\n                .getElementById("addBookBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.addBook);\n            (_b = document\n                .getElementById("addUserBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.addUser);\n            (_c = document\n                .getElementById("booksList")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", this.handleBookAction);\n        };\n        this.displayBooks = () => {\n            const booksListElement = document.getElementById("booksList");\n            if (booksListElement) {\n                booksListElement.innerHTML = this.bookService\n                    .getAllBooks()\n                    .map((book) => this.createBookListItem(book))\n                    .join("");\n            }\n        };\n        this.createBookListItem = (book) => {\n            const buttonClass = book.isBorrowed ? "btn-warning" : "btn-primary";\n            const buttonText = book.isBorrowed ? "Повернути" : "Позичити";\n            return `\r\n          <li class="d-flex justify-content-between align-items-center mb-2">\r\n              <span>${book.title} by ${book.author} (${book.year})</span>\r\n              <button class="btn ${buttonClass} btn-sm" data-book-id="${book.id}" data-action="${book.isBorrowed ? "return" : "borrow"}">${buttonText}</button>\r\n          </li>`;\n        };\n        this.displayUsers = () => {\n            const usersListElement = document.getElementById("usersList");\n            if (usersListElement) {\n                usersListElement.innerHTML = this.userService\n                    .getAllUsers()\n                    .map((user) => `<li>${user.name} (${user.email}) - ID: ${user.id} - Позичені книги: ${user.borrowedBooks.length}</li>`)\n                    .join("");\n            }\n        };\n        this.handleBookAction = (event) => {\n            const target = event.target;\n            if (target.tagName === "BUTTON") {\n                const bookId = target.getAttribute("data-book-id");\n                const action = target.getAttribute("data-action");\n                if (bookId && action) {\n                    if (action === "borrow") {\n                        this.showBorrowBookModal(bookId);\n                    }\n                    else if (action === "return") {\n                        this.returnBook(bookId);\n                    }\n                }\n            }\n        };\n        this.showBorrowBookModal = (bookId) => {\n            _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showBorrowBookModal(bookId, (userId) => this.borrowBook(bookId, userId));\n        };\n        this.borrowBook = (bookId, userId) => {\n            try {\n                this.bookService.borrowBook(bookId);\n                this.userService.borrowBook(userId, bookId);\n                _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showSuccessBookActionModal("borrowed");\n                this.displayBooks();\n                this.displayUsers();\n            }\n            catch (error) {\n                if (error instanceof Error &&\n                    error.message === "Користувач не може позичити більше 3-х книг") {\n                    _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showErrorModal("Помилка позичення книги", error.message);\n                }\n                else {\n                    _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showErrorModal("Помилка позичення книги", "Не вдалося позичити книгу.");\n                }\n                this.updateBookButtonState(bookId, false);\n            }\n        };\n        this.updateBookButtonState = (bookId, isBorrowed) => {\n            const bookElement = document.querySelector(`[data-book-id="${bookId}"]`);\n            if (bookElement) {\n                if (isBorrowed) {\n                    bookElement.textContent = "Повернути";\n                    bookElement.classList.remove("btn-primary");\n                    bookElement.classList.add("btn-warning");\n                    bookElement.setAttribute("data-action", "return");\n                }\n                else {\n                    bookElement.textContent = "Позичити";\n                    bookElement.classList.remove("btn-warning");\n                    bookElement.classList.add("btn-primary");\n                    bookElement.setAttribute("data-action", "borrow");\n                }\n            }\n        };\n        this.returnBook = (bookId) => {\n            try {\n                const user = this.userService.getUserByBookId(bookId);\n                if (user) {\n                    this.bookService.returnBook(bookId);\n                    this.userService.returnBook(user.id, bookId);\n                    _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showSuccessBookActionModal("returned");\n                    this.displayBooks();\n                    this.displayUsers();\n                }\n            }\n            catch (error) {\n                console.error("Error returning book:", error);\n                _modal__WEBPACK_IMPORTED_MODULE_2__.Modal.showErrorModal("Помилка повернення книги", "Не вдалося повернути книгу.");\n            }\n        };\n        this.bookService = new _services__WEBPACK_IMPORTED_MODULE_0__.BookService();\n        this.userService = new _services__WEBPACK_IMPORTED_MODULE_0__.UserService();\n        this.initEventListeners();\n        this.displayBooks();\n        this.displayUsers();\n    }\n    clearValidationErrors() {\n        const errorElements = document.querySelectorAll(".is-invalid, .border-danger");\n        errorElements.forEach((element) => {\n            element.classList.remove("is-invalid", "border-danger");\n        });\n        const errorMessages = document.querySelectorAll(".invalid-feedback, .text-danger");\n        errorMessages.forEach((element) => {\n            element.remove();\n        });\n    }\n}\ndocument.addEventListener("DOMContentLoaded", () => {\n    new App();\n});\n\n\n//# sourceURL=webpack://lab-app/./src/app.ts?',
        );

        /***/
      },

    /***/ "./src/library.ts":
      /*!************************!*\
  !*** ./src/library.ts ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Library: () => (/* binding */ Library)\n/* harmony export */ });\nclass Library {\n    constructor(storageKey) {\n        this.storageKey = storageKey;\n        this.items = [];\n        this.nextId = 1;\n        this.loadFromStorage();\n    }\n    loadFromStorage() {\n        const data = localStorage.getItem(this.storageKey);\n        if (data) {\n            this.items = JSON.parse(data);\n        }\n        const nextId = localStorage.getItem(Library.idKey);\n        if (nextId) {\n            this.nextId = parseInt(nextId, 10);\n        }\n    }\n    saveToStorage() {\n        localStorage.setItem(this.storageKey, JSON.stringify(this.items));\n        localStorage.setItem(Library.idKey, this.nextId.toString());\n    }\n    generateId() {\n        return (this.nextId++).toString();\n    }\n    add(item) {\n        const id = this.generateId();\n        item.id = id;\n        this.items.push(item);\n        this.saveToStorage();\n        return id;\n    }\n    remove(id) {\n        this.items = this.items.filter(item => item.id !== id);\n        this.saveToStorage();\n    }\n    getAll() {\n        return this.items;\n    }\n    findById(id) {\n        return this.items.find(item => item.id === id);\n    }\n    update(item) {\n        const index = this.items.findIndex(i => i.id === item.id);\n        if (index !== -1) {\n            this.items[index] = item;\n            this.saveToStorage();\n        }\n    }\n}\nLibrary.idKey = 'nextId';\n\n\n//# sourceURL=webpack://lab-app/./src/library.ts?",
        );

        /***/
      },

    /***/ "./src/modal.ts":
      /*!**********************!*\
  !*** ./src/modal.ts ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    static showSuccessModal(message) {\n        const modalElement = document.getElementById('successModal');\n        const messageElement = document.getElementById('successModalMessage');\n        if (messageElement) {\n            messageElement.textContent = message;\n        }\n        if (modalElement) {\n            modalElement.style.display = 'block';\n            modalElement.classList.add('show');\n            modalElement.setAttribute('aria-hidden', 'false');\n        }\n    }\n    static hideModal(modalId) {\n        const modalElement = document.getElementById(modalId);\n        if (modalElement) {\n            modalElement.style.display = 'none';\n            modalElement.classList.remove('show');\n            modalElement.setAttribute('aria-hidden', 'true');\n        }\n    }\n    static showBorrowBookModal(bookId, onConfirm) {\n        const modalElement = document.getElementById('borrowBookModal');\n        const confirmButton = document.getElementById('confirmBorrowButton');\n        const userIdInput = document.getElementById('borrowUserId');\n        const handleConfirm = () => {\n            const userId = userIdInput.value.trim();\n            if (userId) {\n                onConfirm(userId);\n                this.hideModal('borrowBookModal');\n            }\n            else {\n                alert('Будь ласка, введіть ID користувача');\n            }\n        };\n        if (confirmButton) {\n            confirmButton.onclick = handleConfirm;\n        }\n        if (modalElement) {\n            modalElement.style.display = 'block';\n            modalElement.classList.add('show');\n            modalElement.setAttribute('aria-hidden', 'false');\n        }\n        userIdInput.value = '';\n    }\n    static showSuccessBookActionModal(action) {\n        const message = action === 'borrowed' ? 'Книгу успішно позичено' : 'Книгу успішно повернено';\n        const modalElement = document.getElementById('bookActionModal');\n        const messageElement = document.getElementById('bookActionModalMessage');\n        if (messageElement) {\n            messageElement.textContent = message;\n        }\n        if (modalElement) {\n            modalElement.style.display = 'block';\n            modalElement.classList.add('show');\n            modalElement.setAttribute('aria-hidden', 'false');\n        }\n    }\n    static showErrorModal(title, message) {\n        const modalElement = document.getElementById('errorModal');\n        const titleElement = document.getElementById('errorModalTitle');\n        const messageElement = document.getElementById('errorModalMessage');\n        if (titleElement) {\n            titleElement.textContent = title;\n        }\n        if (messageElement) {\n            messageElement.textContent = message;\n        }\n        if (modalElement) {\n            modalElement.style.display = 'block';\n            modalElement.classList.add('show');\n            modalElement.setAttribute('aria-hidden', 'false');\n        }\n    }\n}\ndocument.querySelectorAll('.btn-close, .btn-secondary').forEach(button => {\n    button.addEventListener('click', (event) => {\n        const modalId = event.target.getAttribute('data-modal-id');\n        if (modalId) {\n            Modal.hideModal(modalId);\n        }\n    });\n});\n\n\n//# sourceURL=webpack://lab-app/./src/modal.ts?",
        );

        /***/
      },

    /***/ "./src/models.ts":
      /*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book),\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass Book {\n    constructor(title, author, year) {\n        this.id = Date.now().toString();\n        this.title = title;\n        this.author = author;\n        this.year = year;\n        this.isBorrowed = false;\n    }\n}\nclass User {\n    constructor(name, email) {\n        this.id = Date.now().toString();\n        this.name = name;\n        this.email = email;\n        this.borrowedBooks = [];\n    }\n}\n\n\n//# sourceURL=webpack://lab-app/./src/models.ts?",
        );

        /***/
      },

    /***/ "./src/services.ts":
      /*!*************************!*\
  !*** ./src/services.ts ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookService: () => (/* binding */ BookService),\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models.ts\");\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library */ \"./src/library.ts\");\n\n\nclass BookService {\n    constructor() {\n        this.library = new _library__WEBPACK_IMPORTED_MODULE_1__.Library('books');\n    }\n    addBook(title, author, year) {\n        try {\n            const book = new _models__WEBPACK_IMPORTED_MODULE_0__.Book(title, author, year);\n            this.library.add(book);\n            return true;\n        }\n        catch (error) {\n            console.error('Error adding book:', error);\n            return false;\n        }\n    }\n    removeBook(id) {\n        this.library.remove(id);\n    }\n    getAllBooks() {\n        return this.library.getAll();\n    }\n    borrowBook(bookId) {\n        const book = this.library.findById(bookId);\n        if (book && !book.isBorrowed) {\n            book.isBorrowed = true;\n            this.library.update(book);\n        }\n    }\n    returnBook(bookId) {\n        const book = this.library.findById(bookId);\n        if (book && book.isBorrowed) {\n            book.isBorrowed = false;\n            this.library.update(book);\n        }\n    }\n}\nclass UserService {\n    constructor() {\n        this.library = new _library__WEBPACK_IMPORTED_MODULE_1__.Library('users');\n    }\n    addUser(name, email) {\n        try {\n            const user = new _models__WEBPACK_IMPORTED_MODULE_0__.User(name, email);\n            this.library.add(user);\n            return true;\n        }\n        catch (error) {\n            console.error('Error adding user:', error);\n            return false;\n        }\n    }\n    removeUser(id) {\n        this.library.remove(id);\n    }\n    getAllUsers() {\n        return this.library.getAll();\n    }\n    borrowBook(userId, bookId) {\n        const user = this.library.findById(userId);\n        if (user) {\n            if (user.borrowedBooks.length >= 3) {\n                throw new Error(\"Користувач не може позичити більше 3-х книг\");\n            }\n            user.borrowedBooks.push(bookId);\n            this.library.update(user);\n        }\n    }\n    returnBook(userId, bookId) {\n        const user = this.library.findById(userId);\n        if (user) {\n            user.borrowedBooks = user.borrowedBooks.filter(id => id !== bookId);\n            this.library.update(user);\n        }\n    }\n    getUserByBookId(bookId) {\n        let users = this.getAllUsers();\n        for (let i = 0; i < users.length; ++i) {\n            if (users[i].borrowedBooks.includes(bookId))\n                return users[i];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://lab-app/./src/services.ts?",
        );

        /***/
      },

    /***/ "./src/validation.ts":
      /*!***************************!*\
  !*** ./src/validation.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Validation: () => (/* binding */ Validation)\n/* harmony export */ });\nclass Validation {\n    static validateBook(title, author, year) {\n        const errors = {};\n        if (!title.trim()) {\n            errors['bookTitle'] = 'Назва книги не може бути пустою';\n        }\n        if (!author.trim()) {\n            errors['bookAuthor'] = 'Автор не може бути пустим';\n        }\n        if (!year.trim() || isNaN(Number(year))) {\n            errors['bookYear'] = 'Рік видання повинен бути числом';\n        }\n        return errors;\n    }\n    static validateUser(name, email) {\n        const errors = {};\n        if (!name.trim()) {\n            errors['userName'] = 'Ім\\'я не може бути пустим';\n        }\n        if (!email.trim() || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {\n            errors['userEmail'] = 'Email не є дійсним';\n        }\n        return errors;\n    }\n    static displayErrors(errors) {\n        document.querySelectorAll('.form-control').forEach(input => {\n            input.classList.remove('border', 'border-danger');\n        });\n        document.querySelectorAll('.text-danger').forEach(el => {\n            el.textContent = '';\n        });\n        Object.keys(errors).forEach(key => {\n            var _a;\n            const field = document.getElementById(key);\n            if (field) {\n                field.classList.add('border', 'border-danger');\n                const errorElement = document.createElement('div');\n                errorElement.classList.add('text-danger');\n                errorElement.textContent = errors[key];\n                (_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorElement);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://lab-app/./src/validation.ts?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/app.ts");
  /******/
  /******/
})();
