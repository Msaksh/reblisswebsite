import React from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import Benefits from "./components/Benefits";
import Homebody from "./components/Homebody";

function Home() {
    return (
        <div className="home">
            <HomeCarousel />
            <Homebody />
            {/* <div className="home_merchant"></div>
            <div className="home_categories"></div>
            <div className="home_reblissians"></div>
            <div className="home_ourTeams"></div> */}
        </div>
    );
}

export default Home;
