import { createAction } from "typesafe-actions";
import Todo from "../models/todo";

// they are both actions and action creators

let count = 0;

export const toggleTodo = createAction("todos/toggle", (resolve) => {
    return (id: number) => resolve(id);
});

export const addTodo = createAction("todos/add", (resolve) => {
    return (text: string) => resolve({
        id: ++count,
        text,
        completed: false,
    } as Todo);
});
