import * as React from "react";

export type ArgProps = {
    children?: any;
    active: boolean;
};

export type CallbackProps = {
    onClick: () => void;
};

type Props = ArgProps & CallbackProps;

export default function Link(props: Props) {
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
