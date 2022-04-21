import React from "react";
import "./Homebody.css";
import Dp from "./Dp";
import Benefits from "./Benefits";
import Meet from "./Meet";

function Homebody() {
    return (
        <div className="homebody">
            <Dp />
            <Benefits />
            <Meet />
        </div>
    );
}

export default Homebody;
