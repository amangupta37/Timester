import { Footer, Header, HeroSection, Navbar } from "../../components";
import "./LandingLayout.css";

const LandingLayout = ({ children }) => {
    return (
        <section className="LandingLayout">
            <Header>
                <Navbar />
            </Header>
            <HeroSection />
            <section className="LandingLayout__Sections">{children}</section>
            <Footer />
        </section>
    );
};

export default LandingLayout;
