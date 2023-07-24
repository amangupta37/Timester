import { Typography } from "../../common";
import ProductCard from "../ProductCard/ProductCard";
import Section from "../Section/Section";
import "./BestSellers.css";

const BestSellers = () => {
    return (
        <Section className="BestSellers">
            <Typography className="BestSellers__Title">
                <span>Top </span> Best Sellers
            </Typography>
            <div className="BestSellers__Listing">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Section>
    );
};

export default BestSellers;
