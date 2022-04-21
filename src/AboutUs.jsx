import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="aboutUs__info">
                <div className="aboutUs__container1">
                    <img
                        className="aboutUs__containerimage1"
                        src="https://www.rebliss.in/webpic/officevibe3.png"
                        alt="image1"
                    />
                    <span className="aboutUs__containerPara">
                        <p>
                            reBLISS is an initiative of Kutumbh Care Group,
                            aimed at giving wings to the social economic
                            environment of the country. reBLISS is the brand
                            name of the company Kutumbh Care Distribution
                            Network Pvt. Ltd. which was established in the year
                            2016 registered under Ministry of Corporate Affairs,
                            Companies Act 2013.
                        </p>
                        <p>
                            The brand reBLISS is a combination of two words -
                            reliable and BLISSful. reBLISS brings "Perfect
                            Happiness and Delight (BLISS)" by being "Dependable
                            and Trusted by Consistently delivering Good Quality
                            and Performance (reliable).
                        </p>
                        <p>
                            reBLISS is an organization which is providing
                            opportunities to work & earn anytime anywhere. 1000s
                            of people are working with reBLISS and earning as
                            per their requirement, skill and effort.
                        </p>
                        <p>
                            reBLISS is a Human Network of reBLISS Sathis leading
                            to a Commercial and Social Revolution by creating
                            financial Independence.
                        </p>
                    </span>
                </div>

                <div className="aboutUs__container2">
                    <span className="aboutUs__containerPara">
                        <h1>Our Vision</h1>
                        <p className="aboutUs__containersPara2">
                            Enabling People With Choices Of Work & Place To Earn
                            As Per Their Convenience.
                        </p>
                    </span>

                    <img
                        className="aboutUs__containerimage2"
                        src="https://www.rebliss.in/webpic/vision.jpg"
                    />
                </div>
            </div>

            <div className="aboutUs__ourTeam">
                <div className="aboutUs__ourTeamBox1">
                    <img
                        className="aboutUs__containerimage3"
                        src="https://www.rebliss.in/webpic/team.png"
                        alt="3r image"
                    />

                    <span>
                        <p>OUR TEAM</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
