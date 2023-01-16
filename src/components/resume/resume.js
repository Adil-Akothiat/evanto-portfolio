import React, {useEffect} from "react";
import Loader from "../loader/loader";
import Career from "./components/career";
import "../../styles/pages/resume.css";
import resumeData from "../../data/resume.json";
import Skills from "./components/skills";

export default function Resume (props) {
    useEffect(()=> {
        props.setBorders();
    }, [props])
    return (
        <div className="resume fixed-right container">
            <Loader />
            <Career resume={resumeData.resume}/>
            <Skills />
        </div>
    );
}