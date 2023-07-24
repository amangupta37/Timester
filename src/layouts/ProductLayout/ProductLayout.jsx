import { Footer, Header, Navbar, ProductBannerSection } from "../../components";
import "./ProductLayout.css";
const ProductLayout = (props) => {
    const { children } = props;
    return (
        <section className="ProductLayout">
            <Header>
                <Navbar />
            </Header>
            <ProductBannerSection />
            <main className="ProductLayout__Main">{children}</main>
            <Footer />
        </section>
    );
};

export default ProductLayout;
