import React from "react";
import Typography from "../Typography/Typography";
import { Watch } from "../../../assets/img";
import "./Logo.css";
const Logo = () => {
    return (
        <div className="Logo">
            <figure className="Logo__Icon">
                <img src={Watch} alt="brand-logo" />
            </figure>
            <Typography className="Logo__BrandName" variant="h1">
                Timester
            </Typography>
        </div>
    );
};

export default Logo;
