import { SideMenu } from "../../components";
import { ProductLayout } from "../../layouts";
import "./Product.css";

const Product = () => {
    return (
        <ProductLayout>
            <aside className="Product__Aside">
                <SideMenu />
            </aside>

            <section className="Product__Section"></section>
        </ProductLayout>
    );
};

export default Product;
