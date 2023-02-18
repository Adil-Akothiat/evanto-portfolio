import React from "react";
import "../../../styles/pages/resume.css";

import SkillStack from "./components/skills/skillStack";
import Career from "./components/career/career";

export default function Resume () {

    return (
        <div className="resume fixed-right">
            <div className="main-size pb-3">
                <Career />
                <div className="my-4">
                    <SkillStack />
                </div>
            </div>
        </div>
    );
}