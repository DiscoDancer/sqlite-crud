import * as React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => any;
}

export default function TodoList(props: TodoListProps) {
    const renderTodo = (todo: Todo) => (
        <TodoItem
            completed={todo.completed}
            onClick={() => props.toggleTodo(todo.id)}
            text={todo.text}
            key={todo.id}
        />
    );

    const lis = props.todos.map(renderTodo);

    return (
        <ul>
            {lis}
        </ul>
    );
}
