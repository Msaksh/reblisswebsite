import React from "react";
import "./Benefits.css";
import benefits from "../images/benefits.png";

function Benefits() {
    return (
        <div className="benefits">
            <h1>Benefits of Joining reBLISS</h1>

            <div className="benefits_points">
                <img src={benefits} alt="benefits chart" />
            </div>
        </div>
    );
}

export default Benefits;
