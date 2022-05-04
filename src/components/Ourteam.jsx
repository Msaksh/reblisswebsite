import React from "react";
import "./Ourteam.css";
import ot1 from "../images/OurTeam/ot1.jpg";
import ot2 from "../images/OurTeam/ot2.jpg";
import ot3 from "../images/OurTeam/ot3.jpg";
import ot4 from "../images/OurTeam/ot4.jpg";
import ot5 from "../images/OurTeam/ot5.jpg";
import ot6 from "../images/OurTeam/ot6.jpg";

function Ourteam() {
    return (
        <>
            <div className="bg-white w-full h-auto mb-16 mt-10">
                <div className="w-full bg-white pb-5 pr-10  pl-5 flex ">
                    <h1 className="ourteamColor mt-10 text-4xl font-semibold m-auto ">
                        Meet Our Teams
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-5 m-auto w-full">
                    <div className="ourteam_imgDiv m-auto " data-aos="zoom-in">
                        <img
                            className="auto w-60 rounded-2xl"
                            src={ot1}
                            alt="images"
                        />
                    </div>
                    <div className="ourteam_imgDiv m-auto" data-aos="zoom-in">
                        <img
                            className="auto w-60 rounded-2xl"
                            src={ot2}
                            alt="images"
                        />
                    </div>
                    <div className="ourteam_imgDiv m-auto" data-aos="zoom-in">
                        <img
                            className="auto w-60 rounded-2xl"
                            src={ot3}
                            alt="images"
                        />
                    </div>
                    <div className="ourteam_imgDiv m-auto" data-aos="zoom-in">
                        <img
                            className="auto w-60 rounded-2xl"
                            src={ot4}
                            alt="images"
                        />
                    </div>
                    <div className="ourteam_imgDiv m-auto" data-aos="zoom-in">
                        <img
                            className="auto w-60 rounded-2xl"
                            src={ot5}
                            alt="images"
                        />
                    </div>
                    <div className="ourteam_imgDiv m-auto" data-aos="zoom-in">
                        <img
                            className="auto w-60 rounded-2xl"
                            src={ot6}
                            alt="images"
                        />
                    </div>
                </div>
            </div>
        </>

        // <div className="ourteam">body</div>
    );
}

export default Ourteam;
