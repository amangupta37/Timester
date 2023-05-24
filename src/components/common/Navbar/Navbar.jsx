import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import { CartIcon, WishlistIcon } from "../../icons";
import "./Navbar.css";

const Navbar = (props) => {
    const [isSearchBar, setIsSearchBar] = useState(false);

    const customizeIcon = {
        fontSize: "30px",
        color: "#000000",
        stroke: "#ffffff",
        strokeWidth: 1,
    };

    const handleSearchBar = () => {
        setIsSearchBar(!isSearchBar);
    };

    return (
        <nav className="Navbar" {...props}>
            <div className="Navbar__Container">
                <div className="Navbar__Left">
                    <Logo />
                </div>
                {isSearchBar && (
                    <div className="Navbar__Center">
                        <SearchBar
                            className="Navbar__SearchBar"
                            onClose={handleSearchBar}
                        />
                    </div>
                )}
                <div className="Navbar__Right">
                    <ul className="Navbar__MenuList">
                        {!isSearchBar && (
                            <li className="Navbar__MenuList__Item">
                                <SearchIcon
                                    sx={customizeIcon}
                                    onClick={handleSearchBar}
                                />
                            </li>
                        )}
                        <li className="Navbar__MenuList__Item">
                            <CartIcon style={customizeIcon} count={30} />
                        </li>
                        <li className="Navbar__MenuList__Item">
                            <WishlistIcon style={customizeIcon} count={3} />
                        </li>
                        <li className="Navbar__MenuList__Item">
                            <Button className="Navbar__LoginButton">
                                Login
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
