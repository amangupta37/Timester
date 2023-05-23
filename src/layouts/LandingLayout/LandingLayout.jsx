import { Footer, Header, HeroSection } from "../../components/layout";
import { Navbar } from "../../components";
import "./LandingLayout.css";

const LandingLayout = ({ children }) => {
    return (
        <div className="LandingLayout">
            <Header>
                <Navbar />
            </Header>
            <HeroSection />
            <section>{children}</section>
            <Footer />
        </div>
    );
};

export default LandingLayout;
