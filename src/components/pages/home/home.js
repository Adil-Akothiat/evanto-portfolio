import React, { Suspense, lazy } from "react";
import "../../../styles/pages/home.css";
import Loader from "../../loader/loader";
const Social = lazy(()=> import("./components/social"));
const BackgroundAnimated = lazy(()=> import("./components/animatedBackground"));
const TypingAnimation = lazy(()=> import("./components/typeIt"));

export default function Home () {
    return (
        <div className="home fixed-right">
            <Suspense fallback={<Loader />}>
                <div className="center main-size m-0">
                    <BackgroundAnimated />
                    <div className="home-size position-relative">
                        <TypingAnimation />
                        <Social />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}