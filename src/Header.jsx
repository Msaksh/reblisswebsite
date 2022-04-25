import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
    return (
        <div className="header">
            <Link to="/home">
                <img className="header__logo" src={logo} alt="reBliss Logo" />
            </Link>

            <div className="header__nav">
                <Link to="/getapp">
                    <div className="header__option getApp">
                        <span className="header__optionName">Get App</span>
                    </div>
                </Link>

                <Link to="/aboutUs">
                    <div className="header__option">
                        <span className="header__optionName">About Us</span>
                    </div>
                </Link>

                {/* <Link to="/join">
                    <div className="header__option">
                        <span className="header__optionName">Join</span>
                    </div>
                </Link> */}

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
                <Link to="/contactus">
                    <div className="header__option">
                        <span className="header__optionName">Contact Us</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
