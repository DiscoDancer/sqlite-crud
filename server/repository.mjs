export default class Repository {
    constructor() {
        this.counter = 0;
        this.todoList = [
            { name: "eat", done: true, id: ++this.counter },
            { name: "sleep", done: false, id: ++this.counter },
        ];
    }

    // tslint:disable-next-line:member-access
    getAll() {
        return this.todoList;
    }

    // tslint:disable-next-line:member-access
    add(todo) {
        todo.id = ++this.counter;
        this.todoList.push(todo);
    }

    // tslint:disable-next-line:member-access
    delete(id) {
        const found = this.todoList.find((x) => x.id === id);
        if (!found) {
            return false;
        }
        const index = this.todoList.indexOf(found);
        if (index < 0) {
            return false;
        }
        this.todoList.splice(index, 1);
        return true;
    }

    // tslint:disable-next-line:member-access
    update(todo) {
        const found = this.todoList.find((x) => x.id === todo.id);
        if (!found) {
            return;
        }
        if (todo.name) {
            found.name = todo.name;
        }
        found.done = todo.done;
    }

    // tslint:disable-next-line:member-access
    replace(todo) {
        const { id, name, done } = todo;

        if (this.delete(id)) {
            this.todoList.push({
                done,
                id,
                name,
            });
        }
    }
}
