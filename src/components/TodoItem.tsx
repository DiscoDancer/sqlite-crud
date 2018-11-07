import * as React from "react";

export interface TodoItemProps {
    completed: boolean;
    text: string;
    onClick: () => any;
}

export const TodoItem: React.SFC<TodoItemProps> = (props) => {
    const { completed, text, onClick } = props;
    const cssClass = completed ? "crossed" : "";

    const handleClick = () => { onClick(); };

    return (
        <li
            onClick={handleClick}
            className={cssClass}
        >
            {text}
        </li>
    );
};

export default TodoItem;
