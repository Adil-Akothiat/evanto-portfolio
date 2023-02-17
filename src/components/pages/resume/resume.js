import React from "react";
import Loader from "../../loader/loader";
import Career from "./components/career/career";
import "../../../styles/pages/resume.css";
import SkillStack from "./components/skills/skillStack";

export default function Resume () {

    return (
        <div className="resume fixed-right test">
            <Loader time={500}/>
            <div className="main-size pb-3">
                <Career />
                <div className="my-4">
                    <SkillStack />
                </div>
            </div>
        </div>
    );
}