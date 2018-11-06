import * as React from "react";

export interface TodoItemProps {
    completed: boolean;
    text: string;
    onClick: () => void;
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
