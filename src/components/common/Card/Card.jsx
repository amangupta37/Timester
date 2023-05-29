import "./Card.css";

const Card = (props) => {
    const { className, children } = props;
    const customClass = `${className} Card`;

    return <div className={customClass}>{children}</div>;
};

export default Card;
