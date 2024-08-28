interface LibraryItem {
    title: string;
    author: string;
    borrow(): void; 
    isBorrowed(): boolean; 
}

class Book implements LibraryItem {
    title: string;
    author: string;
    private isBorrowedFlag: boolean;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowedFlag = false;
    }

    borrow(): void {
        if (!this.isBorrowedFlag) {
            this.isBorrowedFlag = true;
            console.log(`Книга "${this.title}" позичена.`);
        } else {
            console.log(`Книга "${this.title}" вже позичена.`);
        }
    }

    isBorrowed(): boolean {
        return this.isBorrowedFlag;
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    private isBorrowedFlag: boolean;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowedFlag = false;
    }

    borrow(): void {
        if (!this.isBorrowedFlag) {
            this.isBorrowedFlag = true;
            console.log(`Журнал "${this.title}" позичений.`);
        } else {
            console.log(`Журнал "${this.title}" вже позичений.`);
        }
    }

    isBorrowed(): boolean {
        return this.isBorrowedFlag;
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    private isBorrowedFlag: boolean;
    duration: number; 

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowedFlag = false;
    }

    borrow(): void {
        if (!this.isBorrowedFlag) {
            this.isBorrowedFlag = true;
            console.log(`DVD "${this.title}" позичено.`);
        } else {
            console.log(`DVD "${this.title}" вже позичено.`);
        }
    }

    isBorrowed(): boolean {
        return this.isBorrowedFlag;
    }
}

class Library {
    private items: LibraryItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Елемент "${item.title}" додано до бібліотеки.`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        for (let i=0;i<this.items.length;i++)
            {
                if(name==this.items[i].title) return this.items[i];
            }
            console.log("Немає "+name);
        return null;
    }

    listAvailableItems(): void {
        if (this.items.length === 0) {
            console.log("Бібліотека порожня.");
        } else {
            console.log("Доступні елементи бібліотеки:");
            this.items.forEach(item => {
                const status = item.isBorrowed() ? "позичений" : "доступний";
                console.log(`- ${item.title} (${item.author}) - ${status}`);
            });
        }
    }
}

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const magazine1 = new Magazine("National Geographic", "National Geographic Society", 202);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

library.listAvailableItems();

const borrowedBook = library.findItemByName("The Great Gatsby");
if (borrowedBook) {
    borrowedBook.borrow();
}

const borrowedDVD = library.findItemByName("Inception");
if (borrowedDVD) {
    borrowedDVD.borrow();
}

library.listAvailableItems();
