import React from "react";
import "./Divider.css";
const Divider = (props) => {
    const { color, thick, space } = props;

    const customStyle = {
        height: thick,
        backgroundColor: color,
        margin: `${space} 0`,
    };

    return <div className="Divider" style={customStyle}></div>;
};

export default Divider;
