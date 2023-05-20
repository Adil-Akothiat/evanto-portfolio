import React from "react";
import "../../../styles/pages/home.css";
import Social from "./components/social";
import BackgroundAnimated from "./components/animatedBackground";
import TypingAnimation from "./components/typeIt";

export default function Home () {
    return (
        <div className="home fixed-right">
            <BackgroundAnimated />
            <div className="center main-size m-0">
                <div className="home-size position-relative">
                    <TypingAnimation />
                    <Social />
                </div>
            </div>
        </div>
    );
}