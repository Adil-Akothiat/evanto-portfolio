import React from "react";
import CircleProgressBar from "./CircleProgressBar";
import LanguageProgress from "./languageProgress";

export default function Skills () {
    return (
        <div>
            <div className="m-title">
                <h2>skills</h2>
            </div>
            <div className="my-grid skills">
                <div>
                    <div className="skill hi-sc-ef scroll">
                        <CircleProgressBar 
                            value={80}
                            skill="javascript"
                        />
                        <CircleProgressBar 
                            value={90}
                            skill="javascript"
                        />
                        <CircleProgressBar 
                            value={45}
                            skill="javascript"
                        />
                        <CircleProgressBar 
                            value={25}
                            skill="javascript"
                        />
                    </div>
                </div>
                <div className="hi-sc-ef scroll">
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