import React from "react";
import "./Dp.css";
import airtel from "../images/airtel.png";
import jiomart from "../images/jiomart.png";

function Dp() {
    return (
        <div className="dp">
            <h1>Demand Partners</h1>
            <div className="dp_logos">
                <img
                    className="dp_logoSize dp_airtel"
                    src={airtel}
                    alt="airtel Logo"
                />
                <img
                    className="dp_logoSize dp_jiomart"
                    src={jiomart}
                    alt="airtel Logo"
                />
                <img
                    className="dp_logoSize dp_airtel"
                    src={airtel}
                    alt="airtel Logo"
                />
                <img
                    className="dp_logoSize dp_jiomart"
                    src={jiomart}
                    alt="airtel Logo"
                />
                <img
                    className="dp_logoSize dp_airtel"
                    src={airtel}
                    alt="airtel Logo"
                />
                <img
                    className="dp_logoSize dp_jiomart"
                    src={jiomart}
                    alt="airtel Logo"
                />
            </div>
        </div>
    );
}

export default Dp;
