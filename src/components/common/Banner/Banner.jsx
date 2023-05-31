import React from "react";
import "./Banner.css";
const Banner = (props) => {
    const { children, className } = props;

    const customClassName = `${className} Banner`;
    return <section className={customClassName}>{children}</section>;
};

export default Banner;
