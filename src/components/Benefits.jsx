import React from "react";
import "./Benefits.css";
import Dpimg from "../images/Dpimg.png";
import Saathiimg from "../images/Saathiimg.png";
import Merchantimg from "../images/Merchantimg.png";

function Benefits() {
    return (
        <div className="benefits">
            <h1 className="benefits_h1">Benefits of Joining reBLISS</h1>

            <div className="benefits_points">
                <div className="benefits_Dp benefits_pointsSection">
                    <img
                        src={Dpimg}
                        className="benefitsImg"
                        alt="Demand Partner"
                    />
                    <div className="benefits_Info">
                        <h1>Demand Partner Demand Partner</h1>
                        <h1>Demand Partner Demand Partner</h1>
                        <h1>Demand Partner Demand Partner</h1>
                    </div>
                </div>

                <div className="benefits_Saathi benefits_pointsSection">
                    <div className="benefits_Info">
                        <h1> WORK ANYTIME, ANYWHERE </h1>
                        <h1> BECOME FINANCIALLY INDEPENDENT </h1>
                        <h1> EARN AS MUCH AS YOU WORK </h1>
                    </div>
                    <img
                        src={Saathiimg}
                        className="benefitsImg"
                        alt="Demand Partner"
                    />
                </div>

                <div className="benefits_Merchant benefits_pointsSection">
                    <img
                        src={Merchantimg}
                        className="benefitsImg"
                        alt="Demand Partner"
                    />
                    <div className="benefits_Info">
                        <h1>Merchant Merchant </h1>
                        <h1>Merchant Merchant </h1>
                        <h1>Merchant Merchant </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
