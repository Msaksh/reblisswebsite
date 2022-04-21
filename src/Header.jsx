import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";

function Header() {
    return (
        <div className="header">
            <Link to="/home">
                <img className="header__logo" src={logo} alt="reBliss Logo" />
            </Link>

            <div className="header__nav">
                <Link to="/home">
                    <div className="header__option">
                        <span className="header__optionName">Home</span>
                    </div>
                </Link>

                <Link to="/aboutUs">
                    <div className="header__option">
                        <span className="header__optionName">About Us</span>
                    </div>
                </Link>

                <Link to="/join">
                    <div className="header__option">
                        <span className="header__optionName">Join</span>
                    </div>
                </Link>

                {/* <Link to="/training">
                    <div className="header__option">
                        <span className="header__optionName">Training</span>
                    </div>
                </Link> */}

                <Link to="/blog">
                    <div className="header__option">
                        <span className="header__optionName">Blog</span>
                    </div>
                </Link>

                <div className="header__option">
                    <a href="#footer" className="header__optionName">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
