var Book = (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowedFlag = false;
    }
    Book.prototype.borrow = function () {
        if (!this.isBorrowedFlag) {
            this.isBorrowedFlag = true;
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
        else {
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
    };
    Book.prototype.isBorrowed = function () {
        return this.isBorrowedFlag;
    };
    return Book;
}());
var Magazine = (function () {
    function Magazine(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowedFlag = false;
    }
    Magazine.prototype.borrow = function () {
        if (!this.isBorrowedFlag) {
            this.isBorrowedFlag = true;
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
        else {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
    };
    Magazine.prototype.isBorrowed = function () {
        return this.isBorrowedFlag;
    };
    return Magazine;
}());
var DVD = (function () {
    function DVD(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowedFlag = false;
    }
    DVD.prototype.borrow = function () {
        if (!this.isBorrowedFlag) {
            this.isBorrowedFlag = true;
            console.log("DVD \"".concat(this.title, "\" \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
        else {
            console.log("DVD \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
    };
    DVD.prototype.isBorrowed = function () {
        return this.isBorrowedFlag;
    };
    return DVD;
}());
var Library = (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(item.title, "\" \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438."));
    };
    Library.prototype.findItemByName = function (name) {
        for (var i = 0; i < this.items.length; i++) {
            if (name == this.items[i].title)
                return this.items[i];
        }
        console.log("Немає " + name);
        return null;
    };
    Library.prototype.listAvailableItems = function () {
        if (this.items.length === 0) {
            console.log("Бібліотека порожня.");
        }
        else {
            console.log("Доступні елементи бібліотеки:");
            this.items.forEach(function (item) {
                var status = item.isBorrowed() ? "позичений" : "доступний";
                console.log("- ".concat(item.title, " (").concat(item.author, ") - ").concat(status));
            });
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
var magazine1 = new Magazine("National Geographic", "National Geographic Society", 202);
var dvd1 = new DVD("Inception", "Christopher Nolan", 148);
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
library.listAvailableItems();
var borrowedBook = library.findItemByName("The Great Gatsby");
if (borrowedBook) {
    borrowedBook.borrow();
}
var borrowedDVD = library.findItemByName("Inception");
if (borrowedDVD) {
    borrowedDVD.borrow();
}
library.listAvailableItems();
//# sourceMappingURL=task6.js.map