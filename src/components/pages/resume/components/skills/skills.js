import React from "react";
import Certificat from "./certification/certification";
import CircleProgressBar from "./CircleProgressBar";
import LanguageProgress from "./languageProgress";

export default function Skills (props) {
    return (
        <div className="my-4">
            <div className="m-title mb-5">
                <h2 className="fw-normal">skills</h2>
            </div>
            <div className="my-grid skills">
                <div className="my-card">
                    <div className="skill">
                        {
                            props.resume.skills.map((s, i)=> <CircleProgressBar key={"key-"+i} value={s.rate} skill={s.skill}/>)
                        }
                    </div>
                </div>
                <div className="my-card overflow-hidden">
                    <h3 className="fw-light my-2 text-capitalize">languages</h3>
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
                    <div>
                        <h3 className="fw-light my-2 text-capitalize">licenses & certifications</h3>
                        <Certificat certificat={props.resume.certifications}/>
                    </div>
                </div>
            </div>
        </div>
    );
}