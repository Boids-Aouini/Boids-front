export class LocalStorageMock {
    constructor() {
        this.storage = {};
    }
    setItem(key, value) {
        this.storage[key] = value;
    }
    getItem(key) {
        return this.storage[key] || null;
    }
    removeItem(key) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkwNzU2NTM5fQ.1Z8H0fnnZnASHaJoa5hXIBL01LEpQF5Ve8SiL80liFQ";
