import React from "react";
import Certificat from "./certification/certification";
import LanguageProgress from "./languageProgress";
import Rate from "./rate";

export default function Skills (props) {
    return (
        <div className="my-4">
            <div className="m-title mb-5">
                <h2>skills</h2>
            </div>
            <div>
                <div className="my-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                    <div className="skill">
                        {
                            props.resume.skills.map((s, i)=> <Rate key={"key-"+i} value={s.rate} skill={s.skill}/>)
                        }
                    </div>
                </div>
                <div className="m-title my-5">
                    <h2>languages</h2>
                </div>
                <div className="my-card overflow-hidden" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
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
                <div>
                    <div className="m-title my-5">
                        <h2>Licenses & Certifications</h2>
                    </div>
                        <Certificat certificat={props.resume.certifications}/>
                    </div>
            </div>
        </div>
    );
}