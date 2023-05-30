import { SmartWatch } from "../../../assets/img";
import { BrandStats } from "../../../constants";
import { Button, Typography } from "../../common";
import { CircleOverlapIcon } from "../../icons";
import "./HeroSection.css";

const HeroSection = () => {
    const Statistics = (item) => (
        <div className="HeroSection__Left__Stats__Wrapper" key={item?.type}>
            <Typography
                className="HeroSection__Left__Stats__Number"
                variant="h1"
            >
                {item?.stats}
            </Typography>
            <Typography className="HeroSection__Left__Stats__Label">
                {item?.type}
            </Typography>
        </div>
    );

    return (
        <section className="HeroSection">
            <div className="HeroSection__Left">
                <div className="HeroSection__Left__Content">
                    <Typography
                        className="HeroSection__Left__Content__Title"
                        variant="h1"
                    >
                        Your Smart Life Starts Here
                    </Typography>

                    <Typography className="HeroSection__Left__Content__Description">
                        Finding your watch has never been easier. Browse the
                        best selection of famous brand that suits your style and
                        preference with timester.
                    </Typography>

                    <Button className="HeroSection__Left__Button">
                        Check Now
                    </Button>

                    <div className="HeroSection__Left__Stats">
                        {BrandStats?.map(Statistics)}
                    </div>

                    <div className="HeroSection__Left__Offers">
                        <CircleOverlapIcon className="HeroSection__Left__OffersIcon" />
                        <Typography className="HeroSection__Left__Offers_Label">
                            Best Watch Discount <span>30% OFF</span> all
                            Watches!
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="HeroSection__Right">
                <div className="HeroSection__Right__SmartWatch">
                    <img src={SmartWatch} alt="smart-watch" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
