import "./Button.css";

const Button = (props) => {
    const { children, onClick, style, className } = props;

    const customClassName = className ? `${className} Button` : `Button`;

    return (
        <button className={customClassName} onClick={onClick} style={style}>
            {children}
        </button>
    );
};

export default Button;
