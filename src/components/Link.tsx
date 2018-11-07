import * as React from "react";

export interface LinkProps {
    children?: any;
    active: boolean;
    onClick: () => any;
}

export default function Link(props: LinkProps) {
    const styles = {
        marginLeft: "4px",
    };

    return (
        <button
            onClick={props.onClick}
            disabled={props.active}
            style={styles}
        >
            {props.children}
        </button>
    );
}
