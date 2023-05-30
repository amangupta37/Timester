import "./Section.css";

const Section = (props) => {
    const { className, children } = props;
    const customClassName = `Landing__Section ${className}`;
    return <section className={customClassName}>{children}</section>;
};

export default Section;
