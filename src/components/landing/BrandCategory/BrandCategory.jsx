import { BrandCategoryList } from "../../../constants";
import { Typography } from "../../common";
import BrandCard from "../BrandCard/BrandCard";
import Section from "../Section/Section";
import "./BrandCategory.css";

const BrandCategory = () => {
    return (
        <Section className="BrandCategory">
            <Typography className="BrandCategory__Title" variant="h1">
                <span>Explore</span> Brand Categories
            </Typography>
            <div className="BrandCategory__Listing">
                {BrandCategoryList?.map((brand) => (
                    <BrandCard
                        key={brand.id}
                        image={brand.brand_image}
                        title={`${brand.brand_name} Smartwatches`}
                    />
                ))}
            </div>
        </Section>
    );
};

export default BrandCategory;
