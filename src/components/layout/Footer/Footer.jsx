import { FooterLinks, SocialMedia } from "../../../constants";
import { Typography } from "../../common";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__Content">
                <div className="Footer__Content__Top">
                    <div className="Footer__Content__Top__Social">
                        <Typography
                            variant="h1"
                            className="Footer__Content__Top__Social__Title"
                        >
                            Let&apos;s get social
                        </Typography>
                        <div className="Footer__Content__Top__Social__SocialMedia">
                            {SocialMedia?.map((social) => (
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={social.key}
                                    className={social.type}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <Typography className="Footer__Content__Top__DevelopedBy">
                            Developed by Aman Gupta.
                        </Typography>
                    </div>
                </div>
                <div className="Footer__Content__Bottom">
                    <div className="Footer__Content__Bottom__Left">
                        <Typography className="Footer__Content__Bottom__Left__RightsReserved">
                            ©2023 Timester Inc. All Rights Reserved.
                        </Typography>
                    </div>
                    <div className="Footer__Content__Bottom__Right">
                        {FooterLinks?.map((link) => (
                            <Typography
                                className="Footer__Content__Bottom__Right__Links"
                                key={link.id}
                            >
                                {link.type}
                            </Typography>
                        ))}
                    </div>
                </div>
            </div>
            <div className="Footer__Line"></div>
        </footer>
    );
};

export default Footer;
