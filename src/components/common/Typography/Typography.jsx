const Typography = (props) => {
    const { variant, children, className, style } = props;
    const Component = variant ? variant : "p";

    return (
        <Component className={className} style={style} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
