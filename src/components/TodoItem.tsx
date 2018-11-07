import * as React from "react";

export interface TodoItemProps {
    completed: boolean;
    text: string;
    onClick: () => any;
}

export default function TodoItem(props: TodoItemProps) {
    const cssClass = props.completed ? "crossed" : "";

    return (
        <li
            onClick={props.onClick}
            className={cssClass}
        >
            {props.text}
        </li>
    );
}
