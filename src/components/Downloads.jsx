import React from "react";
import "./Downloads.css";

function Downloads() {
    return (
        <div
            className="downloads"
            data-aos="flip-down"
            onClick={() =>
                (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.rebliss")
            }
        >
            <div className="downloads_heading flexBox">
                <p className="downloads_headingNum">60K </p>
                <p className="downloads_headingPlus">+</p>
                <p>Downloads</p>
            </div>

            <div className="numberOfSaathi flexBox">
                <p className="downloads_headingNum">5k </p>
                <p className="downloads_headingPlus">+ </p>
                <p>Sathi's </p>
            </div>

            <div className="numberOfMer flexBox">
                <p className="downloads_headingNum">10L </p>
                <p className="downloads_headingPlus">+ </p>
                <p>Merchant's </p>
            </div>
        </div>
    );
}

export default Downloads;
