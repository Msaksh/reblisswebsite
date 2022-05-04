import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";

function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    console.log(year);

    return (
        <div className="footer" id="footer">
            <div className="top">
                <div className="top1 top_options">
                    <a
                        href="http://103.127.29.253/payroll/Emplogin.aspx?id=29"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Employee Login
                    </a>
                </div>
                <div className="top3">
                    <div className="footer__contactUsTop">
                        <h1>Follow Us</h1>

                        <div className="follow_names">
                            <a
                                href="https://www.linkedin.com/company/rebliss-in/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href="https://www.facebook.com/reblissapp/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://instagram.com/reblissapp?igshid=YmMyMTA2M2Y="
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="https://t.me/reBLISS"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <TelegramIcon />
                            </a>
                        </div>
                    </div>
                    <div className="footer__contactUsBottom">
                        <h1>Address :-</h1>

                        <div className="footer__addressBox">
                            <LocationOnIcon
                                fontSize="large"
                                className="footer__icons"
                            />
                            <p>
                                Kutumbh Care Distribution Network Pvt Ltd, B
                                154,B Block Sector 63, Noida, Uttar Pradesh
                                201301
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="footer__copyright">&copy; {year}</div>
                <img className="footer__logo" src={logo} alt="reBLISS icons" />
                <Link to={"/terms&conditions"} className="footerBottom_tcpp">
                    <div className="footer__tc">Terms & Conditions</div>
                </Link>
                <Link to={"/privacypolicy"} className="footerBottom_tcpp">
                    <div className="footer__tc">Privacy Policy</div>
                </Link>
            </div>
        </div>
    );
}

export default Footer;
