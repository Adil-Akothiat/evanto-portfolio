import React, {Suspense} from "react";
import "../../../styles/pages/home.css";

import BackgroundAnimated from "./components/animatedBackground";
import TypingAnimation from "./components/typeIt";

const Social = React.lazy(()=> import("./components/social"));

export default function Home () {
    return (
        <div className="home fixed-right">
            <div className="center main-size m-0">
                <BackgroundAnimated />
                <div className="home-size">
                    <TypingAnimation />
                    <Suspense fallback={<div>...loading...</div>}>
                        <Social />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}