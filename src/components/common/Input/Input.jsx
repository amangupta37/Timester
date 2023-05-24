import "./Input.css";
const Input = (props) => {
    const { placeholder, type, onChange, style, className } = props;

    const customClassName = className ? `Input ${className}` : `Input`;

    return (
        <input
            className={customClassName}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            style={style}
        />
    );
};

export default Input;
