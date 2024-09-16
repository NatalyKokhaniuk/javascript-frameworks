export class Book {
    constructor(title, author, year) {
        this.id = Date.now().toString();
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;
    }
}
export class User {
    constructor(name, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }
}
//# sourceMappingURL=models.js.map