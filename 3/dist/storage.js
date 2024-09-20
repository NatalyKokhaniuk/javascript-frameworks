export class Storage {
    static saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    static getData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    static clearData(key) {
        localStorage.removeItem(key);
    }
    static clear() {
        localStorage.clear();
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
}
//# sourceMappingURL=storage.js.map