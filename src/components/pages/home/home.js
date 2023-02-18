import React from "react";
import "../../../styles/pages/home.css";

import BackgroundAnimated from "./components/animatedBackground";
import TypingAnimation from "./components/typeIt";
import Social from "./components/social";

export default function Home () {
    return (
        <div className="home fixed-right">
            <div className="center main-size m-0">
                <BackgroundAnimated />
                <div className="home-size">
                    <TypingAnimation />
                    <Social />
                </div>
            </div>
        </div>
    );
}