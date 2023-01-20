import React from "react";
import Loader from "../loader/loader";
import Career from "./components/career";
import "../../styles/pages/resume.css";
import resumeData from "../../data/resume.json";
import Skills from "./components/skills";

export default function Resume (props) {
    return (
        <div className="resume fixed-right container" onScroll={props.handleScroll}>
            <Loader time={500}/>
            <div className="main-size">
                <Career resume={resumeData.resume}/>
                <Skills />
            </div>
        </div>
    );
}