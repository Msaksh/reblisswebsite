import React from "react";
import "./Blogcard.css";

function Blogcard() {
    return (
        <div className="blogcard">
            <img
                src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2dzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <div className="blogcard_items">
                <h3>Blog Heading</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    quam possimus dolorum ipsa deserunt rerum repellat
                    asperiores ex dolores pariatur.
                </p>
            </div>
        </div>
    );
}

export default Blogcard;
