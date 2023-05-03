import React, { Suspense } from "react";
import "../../../styles/pages/resume.css";
import Loader from "../../loader/loader";
const SkillStack = React.lazy(()=> import("./components/skills/skillStack"));
const Career = React.lazy(()=> import("./components/career/career"));

export default function Resume () {
    return (
        <div className="resume fixed-right">
            <div className="main-size pb-3">
                <Suspense fallBack={<Loader />}>
                    <Career />
                    <div className="my-4">
                        <SkillStack />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}