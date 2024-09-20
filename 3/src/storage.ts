export class Storage {
    static saveData(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getData(key: string): any {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    static clearData(key: string): void {
        localStorage.removeItem(key);
    } 
    static clear(): void {
        localStorage.clear();
    }

    static remove(key: string): void {
        localStorage.removeItem(key);
    }
}