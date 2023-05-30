import React from "react";
import "./Landing.css";
import { LandingLayout } from "../../layouts";
import { BestSellers, BrandCategory } from "../../components";
const Landing = () => {
    return (
        <LandingLayout>
            <BrandCategory />
            <BestSellers />
        </LandingLayout>
    );
};

export default Landing;
