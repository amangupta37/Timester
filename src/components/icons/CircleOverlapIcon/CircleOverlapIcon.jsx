import "./CircleOverlapIcon.css";

const CircleOverlapIcon = (props) => {
    const { className, primaryCircleColor, secondaryCircleColor, iconSize } =
        props;

    const customClassName = className
        ? `CircleOverlap ${className}`
        : `CircleOverlap`;

    const customPrimaryCircleColor = {
        backgroundColor: primaryCircleColor,
        width: iconSize,
        height: iconSize,
    };

    const customSecondaryCircleColor = {
        backgroundColor: secondaryCircleColor,
        width: iconSize,
        height: iconSize,
    };

    return (
        <div className={customClassName}>
            <div
                className="CircleOverlap__CirclePrimary"
                style={customPrimaryCircleColor}
            ></div>
            <div
                className="CircleOverlap__CircleSecondary"
                style={customSecondaryCircleColor}
            ></div>
        </div>
    );
};

export default CircleOverlapIcon;
