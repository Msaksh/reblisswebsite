import React from "react";
import "./Meet.css";

function Meet() {
    return (
        <div className="meet">
            <h1>Meet our reBLISSIANS</h1>
            <div className="meet_video">
                <iframe
                    // width="270"
                    // height="150"
                    src="https://www.youtube.com/embed/lDSo2-L_q70"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <iframe
                    // width="325"
                    // height="150"
                    src="https://www.youtube.com/embed/dNOVdoCXx0w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <iframe
                    // width="325"
                    // height="150"
                    src="https://www.youtube.com/embed/iJ8v3ul438A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Meet;
