import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Notification } from "../../common";

const CartIcon = (props) => {
    const { count, style, className } = props;

    return (
        <Notification counts={count}>
            <ShoppingCartOutlinedIcon className={className} sx={style} />
        </Notification>
    );
};

export default CartIcon;
