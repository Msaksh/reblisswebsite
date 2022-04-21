import React from "react";
import "./HomeCarousel.css";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
    return (
        <div className="home_carousel">
            <Carousel fade>
                <Carousel.Item interval={500}>
                    <div className="carImg carImg1"></div>
                    <Carousel.Caption>
                        <h1>Heading 1</h1>
                        <p>This is the Heading 1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className="carImg carImg2"></div>
                    <Carousel.Caption>
                        <h1>Heading 2</h1>
                        <p>This is the Heading 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className="carImg carImg3"></div>
                    <Carousel.Caption>
                        <h1>Heading 3</h1>
                        <p>This is the Heading 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;