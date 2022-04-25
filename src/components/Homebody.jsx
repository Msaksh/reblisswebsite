import React from "react";
import "./Homebody.css";
import Dp from "./Dp";
import Downloads from "./Downloads";
import Benefits from "./Benefits";
import Meet from "./Meet";
import Operating from "./Operating";

function Homebody() {
    return (
        <div className="homebody">
            <Benefits />
            <Downloads />
            <Operating />
            <Meet />
            <Dp />
        </div>
    );
}

export default Homebody;
