import * as React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => any;
}

export const TodoList: React.SFC<TodoListProps> = (props) => {
    const { todos, toggleTodo } = props;

    const renderTodo = (todo: Todo) => (
        <TodoItem
            completed={todo.completed}
            onClick={() => toggleTodo(todo.id)}
            text={todo.text}
            key={todo.id}
        />
    );

    const lis = todos.map(renderTodo);

    return (
        <ul>
            {lis}
        </ul>
    );
};

export default TodoList;
