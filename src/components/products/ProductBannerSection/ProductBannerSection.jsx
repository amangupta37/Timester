import React from "react";
import { Banner } from "../../common";
import "./ProductBannerSection.css";
import { BlackWatch } from "../../../assets/img";
const ProductBannerSection = () => {
    return (
        <Banner className="Product__Banner">
            <figure className="Product__Banner__Image">
                <img src={BlackWatch} alt="product-banner" />
            </figure>
        </Banner>
    );
};

export default ProductBannerSection;
