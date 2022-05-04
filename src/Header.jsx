import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import playStoreIcon from "./images/playStoreIcon.png";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

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

                <Link to="/getapp">
                    <div className="header__option getApp">
                        <span className="header__optionName">Get App</span>
                        <img src={playStoreIcon} alt="" />
                    </div>
                </Link>
            </div>
        </div>

        // react bootstrap navbar
        // <Navbar bg="light" expand="lg" className="navbar">
        //     <Container className="containerr">

        //         <Link to="/home">
        //             <img
        //                 className="header__logo"
        //                 src={logo}
        //                 alt="reBliss Logo"
        //             />
        //         </Link>

        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-autos">
        //                 <Link to="/home">
        //                     <div className="header__option">
        //                         <span className="header__optionName">Home</span>
        //                     </div>
        //                 </Link>

        //                 <Link to="/aboutUs">
        //                     <div className="header__option">
        //                         <span className="header__optionName">
        //                             About Us
        //                         </span>
        //                     </div>
        //                 </Link>

        //                 <Link to="/blog">
        //                     <div className="header__option">
        //                         <span className="header__optionName">Blog</span>
        //                     </div>
        //                 </Link>

        //                 <Link to="/contactus">
        //                     <div className="header__option">
        //                         <span className="header__optionName">
        //                             Contact Us
        //                         </span>
        //                     </div>
        //                 </Link>

        //                 <Link to="/getapp">
        //                     <div className="header__option getApp">
        //                         <span className="header__optionName">
        //                             Get App
        //                             <img src={playStoreIcon} alt="" />
        //                         </span>
        //                     </div>
        //                 </Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}

export default Header;
