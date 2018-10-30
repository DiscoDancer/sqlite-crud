import * as React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

export type ArgProps = {
    todos: Todo[];
};

export type CallbackProps = {
    toggleTodo: (id: number) => void;
};

type Props = ArgProps & CallbackProps;

function renderTodo(id: number, text: string, completed: boolean, toggleTodo: (id: number) => void) {
    return (
        <TodoItem
            completed={completed}
            onClick={() => toggleTodo(id)}
            text={text}
            key={id}
        />
    );
}

export default function TodoList(props: Props) {
    const lis = props.todos.map((todo) => renderTodo(todo.id, todo.text, todo.completed, props.toggleTodo));
    return (
        <ul>
            {lis}
        </ul>
    );
}
