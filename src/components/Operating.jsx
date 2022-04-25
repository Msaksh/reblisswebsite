import React from "react";
import "./Operating.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import ReactTooltip from "react-tooltip";
import Tooltip from "@mui/material/Tooltip";

function Operating() {
    return (
        <div className="operating">
            <h1>Successfully Operating</h1>
            <p>In these Cities</p>
            <div className="bgMap">
                <Tooltip title="Delhi" placement="top">
                    <LocationOnIcon className="locationPointer lpDelhi" />
                </Tooltip>
                <Tooltip title="Madhya Pradesh" placement="top">
                    <LocationOnIcon className="locationPointer lpMp" />
                </Tooltip>
                <Tooltip title="Maharashtra" placement="top">
                    <LocationOnIcon className="locationPointer lpM" />
                </Tooltip>
                <Tooltip title="Uttar Pradesh" placement="top">
                    <LocationOnIcon className="locationPointer lpUp" />
                </Tooltip>
                <Tooltip title="Uttarakhand" placement="top">
                    <LocationOnIcon className="locationPointer lpU" />
                </Tooltip>
                <Tooltip title="Arunachal Pradesh" placement="top">
                    <LocationOnIcon className="locationPointer lpAp" />
                </Tooltip>
                <Tooltip title="Himachal Pradesh" placement="top">
                    <LocationOnIcon className="locationPointer lpHp" />
                </Tooltip>
            </div>
        </div>
    );
}

export default Operating;
