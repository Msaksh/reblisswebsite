import React from "react";
import "./Homebody.css";
import Dp from "./Dp";
import Downloads from "./Downloads";
import Benefits from "./Benefits";
import Meet from "./Meet";
import Operating from "./Operating";
// import Intro from "./Intro";
// import Rebliss from "./Rebliss";

function Homebody() {
    return (
        <div className="homebody">
            {/* <Intro /> */}
            <Benefits />
            <Downloads />
            <Operating />
            <Meet />
            <Dp />
        </div>
    );
}

export default Homebody;
