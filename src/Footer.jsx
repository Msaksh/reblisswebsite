import React from "react";
import "./Footer.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "./images/logo.jpg";
function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    console.log(year);

    return (
        <div className="footer" id="footer">
            <div className="top">
                <div className="top1 top_options">
                    <img src={logo} alt="reBLISS Icon" />
                    <button>Employee Login</button>
                </div>
                <div className="top3">
                    <div className="footer__contactUsTop">
                        <h1>Contact US</h1>
                        <CallIcon fontSize="large" className="footer__icons" />
                        <EmailIcon fontSize="large" className="footer__icons" />
                        <WhatsAppIcon
                            fontSize="large"
                            className="footer__icons"
                        />
                        <InstagramIcon
                            fontSize="large"
                            className="footer__icons"
                        />
                        <FacebookIcon
                            fontSize="large"
                            className="footer__icons"
                        />
                    </div>
                    <div className="footer__contactUsBottom">
                        <h1>Address :-</h1>

                        <div className="footer__addressBox">
                            <LocationOnIcon
                                fontSize="large"
                                className="footer__icons"
                            />
                            <p>
                                i-Thum Tower, A-108, Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="footer__copyright">&copy; {year} reBLISS</div>
                <div className="footer__tc">Terms & Conditions</div>
                <div className="footer__tc">Privacy Policy</div>
            </div>
        </div>
    );
}

export default Footer;
