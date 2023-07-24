import React from "react";
import { Button, Divider, Typography } from "../../common";
import "./SideMenu.css";

const SideMenu = () => {
    return (
        <aside className="Products__SideMenu">
            <div className="SideMenu__Header">
                <Typography className="SideMenu__Title" variant="h1">
                    Filters
                </Typography>
                <Button className="SideMenu__Button">Clear</Button>
            </div>
            <Divider
                color={divider.color}
                space={divider.space}
                thick={divider.thick}
            />
            <div className="SideMenu__Body"></div>
        </aside>
    );
};

export default SideMenu;

const divider = {
    color: "#E5E7E9",
    space: "2rem",
    thick: "1.2px",
};
