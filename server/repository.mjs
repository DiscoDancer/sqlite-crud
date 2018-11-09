export default class Repository {
    constructor() {
        this.counter = 0;
        this.data = [
            { name: "eat", done: true, id: ++this.counter },
            { name: "sleep", done: false, id: ++this.counter },
        ];
    }

    // tslint:disable-next-line:member-access
    getAll() {
        return this.data;
    }
}
