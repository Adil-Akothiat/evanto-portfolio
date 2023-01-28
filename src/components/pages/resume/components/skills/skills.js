import React from "react";
import CircleProgressBar from "./CircleProgressBar";
import LanguageProgress from "./languageProgress";

export default function Skills (props) {
    return (
        <div>
            <div className="m-title mb-5">
                <h2 className="fw-normal">skills</h2>
            </div>
            <div className="my-grid skills">
                <div className="my-card">
                    <div className="skill hi-sc-ef scroll">
                        {
                            props.resume.skills.map((s, i)=> <CircleProgressBar key={"key-"+i} value={s.rate} skill={s.skill}/>)
                        }
                    </div>
                </div>
                <div className="hi-sc-ef scroll my-card" style={{height:"fit-content"}}>
                    <div className="languages">
                        < LanguageProgress 
                            language="arabic"
                            languageRate={5}
                            description="native"
                        />
                        <LanguageProgress 
                            language="english"
                            languageRate={3}
                            description="intermediate"
                        />
                        <LanguageProgress 
                            language="germany"
                            languageRate={4}
                            description="proficient"
                        />
                        <LanguageProgress 
                            language="spanish"
                            languageRate={1}
                            description="beginner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}