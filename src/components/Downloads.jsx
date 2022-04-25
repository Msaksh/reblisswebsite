import React from "react";
import "./Downloads.css";

function Downloads() {
    return (
        <div
            className="downloads"
            onClick={() =>
                (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.rebliss")
            }
        >
            <div className="downloads_heading">
                <p>Downloads</p>
                <p className="downloads_headingNum">60K </p>
                <p className="downloads_headingPlus">+</p>
            </div>
        </div>
    );
}

export default Downloads;
