import React, { Suspense, lazy } from "react";
import "../../../styles/pages/resume.css";
import Loader from "../../loader/loader";
const SkillStack = lazy(()=> import("./components/skills/skillStack"));
const Career = lazy(()=> import("./components/career/career"));

export default function Resume () {
    return (
        <div className="resume fixed-right">
            <Suspense fallback={<Loader />}>
                <div className="main-size pb-3">
                    <Career />
                    <SkillStack />
                </div>
            </Suspense>
        </div>
    );
}