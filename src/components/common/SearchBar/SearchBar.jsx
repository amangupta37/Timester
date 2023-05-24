import React from "react";
import Input from "../Input/Input";
import SearchIcon from "@mui/icons-material/Search";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./SearchBar.css";
const SearchBar = (props) => {
    const { className, onClose } = props;

    const customClassName = className ? `${className} SearchBar` : `SearchBar`;

    const customizeIcon = {
        fontSize: "25px",
        color: "#000000",
        stroke: "#ffffff",
        strokeWidth: 1,
    };

    const customizeCloseIcon = {
        fontSize: "22px",
        color: "#D5D5D5",
        transition: "1s",
    };

    return (
        <div className={customClassName}>
            <div className="SearchBar__Icon">
                <SearchIcon sx={customizeIcon} />
            </div>
            <Input className="SearchBar__Input" placeholder="Search..." />

            <CancelOutlinedIcon
                className="SearchBar__CloseIcon"
                sx={customizeCloseIcon}
                onClick={onClose}
            />
        </div>
    );
};

export default SearchBar;
