import * as React from "react";

export interface LinkProps {
    children?: any;
    active: boolean;
    onClick: () => any;
}

export const Link: React.SFC<LinkProps> = (props) => {
    const { children, active, onClick } = props;
    const styles = {
        marginLeft: "4px",
    };

    return (
        <button
            onClick={onClick}
            disabled={active}
            style={styles}
        >
            {children}
        </button>
    );
};

export default Link;
