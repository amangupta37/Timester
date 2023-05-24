import React from "react";
import Typography from "../Typography/Typography";
import { watch } from "../../../assets/img";
import "./Logo.css";
const Logo = () => {
    return (
        <div className="Logo">
            <div className="Logo__Icon">
                <img src={watch} alt="brand-logo" />
            </div>
            <Typography className="Logo__BrandName" variant="h1">
                Timester
            </Typography>
        </div>
    );
};

export default Logo;
