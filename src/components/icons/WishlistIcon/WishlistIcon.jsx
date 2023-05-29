import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Notification } from "../../common";

const WishlistIcon = (props) => {
    const { count, style, className } = props;

    return (
        <Notification counts={count}>
            <FavoriteBorderOutlinedIcon className={className} sx={style} />
        </Notification>
    );
};

export default WishlistIcon;
