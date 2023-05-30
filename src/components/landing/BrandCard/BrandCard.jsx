import React from "react";
import { Card, Typography } from "../../common";
import "./BrandCard.css";

const BrandCard = (props) => {
    const { title, image, onClick } = props;
    return (
        <Card className="BrandCard" onClick={onClick}>
            {image && (
                <div className="BrandCard__Image">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="BrandCard__Brand">
                <Typography className="BrandCard__Text">{title}</Typography>
            </div>
        </Card>
    );
};

export default BrandCard;
