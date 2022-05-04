import React from "react";
import "./Benefits.css";
import Dpimg from "../images/Dpimg.png";
import Saathiimg from "../images/Saathiimg.png";
import Merchantimg from "../images/Merchantimg.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Benefits() {
    return (
        <div className="benefits">
            <h1 className="benefits_h1" data-aos="fade-down">
                Benefits of Joining reBLISS
            </h1>

            <div className="benefits_points">
                {/* <div
                    className="benefits_Dp benefits_pointsSection"
                    data-aos="fade-right"
                >
                    <img
                        src={Dpimg}
                        className="benefitsImg"
                        alt="Demand Partner"
                    />
                    <div className="benefits_Info">
                        <span className="benefits_Underline">
                            Demand Partner
                        </span>
                        <h1>
                            Work for 50+ companies such as Airtel and JioMart
                        </h1>
                        <h1>
                            Work for 50+ companies such as Airtel and JioMart
                        </h1>
                    </div>
                </div> */}
                <div
                    className="benefits_Merchant benefits_pointsSection"
                    data-aos="fade-right"
                >
                    <img
                        src={Merchantimg}
                        className="benefitsImg"
                        alt="Merchant"
                    />
                    <div className="benefits_Info">
                        <span className="benefits_Underline">Merchant</span>
                        <h1>
                            <ArrowRightAltIcon />
                            Diverse products{" "}
                        </h1>
                        <h1>
                            <ArrowRightAltIcon />
                            Collaborations with established brands{" "}
                        </h1>
                        <h1>
                            <ArrowRightAltIcon />
                            Customer service support
                        </h1>
                    </div>
                </div>

                <div
                    className="benefits_Sathi benefits_pointsSection"
                    data-aos="fade-left"
                >
                    <div
                        className="benefits_Info"
                        // data-aos="fade-right"
                    >
                        <span className="benefits_Underline">Saathi</span>
                        <h1>
                            <ArrowRightAltIcon />
                            reBLISS के साथ , जितनी मेहनत उतनी कमाई...
                        </h1>
                        <h1>
                            <ArrowRightAltIcon /> Zero investment
                        </h1>
                        <h1>
                            <ArrowRightAltIcon /> Skill oriented tasks
                        </h1>
                        <h1>
                            <ArrowRightAltIcon /> Training and upskilling
                        </h1>
                        <h1>
                            <ArrowRightAltIcon /> Shortest Payout cycle
                        </h1>
                    </div>
                    <img
                        src={Saathiimg}
                        // data-aos="fade-left"
                        className="benefitsImg"
                        alt="Sathi"
                    />
                </div>

                <div
                    className="benefits_Dp benefits_pointsSection"
                    data-aos="fade-right"
                >
                    <img
                        src={Dpimg}
                        className="benefitsImg"
                        alt="Demand Partner"
                    />
                    <div className="benefits_Info">
                        <span className="benefits_Underline">
                            Demand Partner
                        </span>
                        <h1>
                            <ArrowRightAltIcon />
                            Work for 50+ companies such as Airtel and JioMart
                        </h1>
                        <h1>
                            <ArrowRightAltIcon />
                            Work for 50+ companies such as Airtel and JioMart
                        </h1>
                    </div>
                </div>

                {/* <div
                    className="benefits_Merchant benefits_pointsSection"
                    data-aos="fade-right"
                >
                    <img
                        src={Merchantimg}
                        className="benefitsImg"
                        alt="Merchant"
                        // data-aos="fade-right"
                    />
                    <div className="benefits_Info">
                        <span className="benefits_Underline">Merchant</span>
                        <h1>Diverse products </h1>
                        <h1>Collaborations with established brands </h1>
                        <h1>Customer service support</h1>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Benefits;
