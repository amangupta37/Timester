import StarRateIcon from "@mui/icons-material/StarRate";
import { Button, Card, Typography } from "../../common";
import "./ProductCard.css";

const ProductCard = (props) => {
    const { label, productName, productPrice, productRatting, productImage } =
        props;

    return (
        <Card className="ProductCard">
            <figure className="ProductCard__ProductImage">
                <Typography className="ProductCard__Label">
                    🎉{label}
                </Typography>
                <img src={productImage} alt={productName} />
            </figure>
            <div className="ProductCard__ProductInfo">
                <div className="ProductCard__Left">
                    <div className="ProductCard__Rating">
                        <StarRateIcon sx={customizeIcon} />
                        <Typography className="ProductCard__Rating__Text">
                            {productRatting}
                        </Typography>
                    </div>
                    <div className="ProductCard__Details">
                        <Typography className="ProductCard__Name">
                            {productName}
                        </Typography>
                        <Typography className="ProductCard__Price">
                            ₹ {productPrice}/-
                        </Typography>
                    </div>
                </div>
                <div className="ProductCard__Right">
                    <Typography className="ProductCard__Offer">
                        30% off
                    </Typography>
                    <div className="ProductCard__ShopNow">
                        <Button className="ShopNoW__Button">Shop Now</Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;

const customizeIcon = {
    fontSize: "22px",
    color: "#FFC915",
};
