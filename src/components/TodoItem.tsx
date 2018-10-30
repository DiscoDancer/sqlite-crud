import * as React from "react";

type Props = {
    onClick: () => void;
    completed: boolean;
    text: string;
};

export default function TodoItem(props: Props) {
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
