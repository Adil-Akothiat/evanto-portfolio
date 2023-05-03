import React, { Suspense } from "react";
import "../../../styles/pages/home.css";
import Loader from "../../loader/loader";

const Social = React.lazy(()=> import("./components/social"));
const BackgroundAnimated = React.lazy(()=> import("./components/animatedBackground"));
const TypingAnimation = React.lazy(()=> import("./components/typeIt"));



export default function Home () {
    return (
        <div className="home fixed-right">
            <div className="center main-size m-0">
                <Suspense fallBack={<Loader />}>
                    <BackgroundAnimated />
                    <div className="home-size position-relative">
                        <TypingAnimation />
                        <Social />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}