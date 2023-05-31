import React from "react";
import { Card, Typography } from "../../common";
import "./BrandCard.css";

const BrandCard = (props) => {
    const { title, image, onClick } = props;
    return (
        <Card className="BrandCard" onClick={onClick}>
            {image && (
                <figure className="BrandCard__Image">
                    <img src={image} alt={title} />
                </figure>
            )}
            <div className="BrandCard__Brand">
                <Typography className="BrandCard__Text">{title}</Typography>
            </div>
        </Card>
    );
};

export default BrandCard;
