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
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg5MjczNjM1fQ.CjLls-VQdsfjlPWdLueg9JHR0VWtz0swUdgYiQ-cESI";
export const storage = {
    '_____auth_______________token': token
}