import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import CircleProgressBar from "./CircleProgressBar";
import LanguageProgress from "./languageProgress";

export default function Skills () {
    return (
        <div className="pd-4">
            <div className="head-page">
                <h2>skills</h2>
            </div>
            <div className="body-page skills">
                <div>
                    <div className="sk-head">
                        <Unicons.UilBrowser />
                        <h4>{"frontend".toUpperCase()}</h4>
                    </div>
                    <div className="gr">
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
                <div>
                    <div className="sk-head">
                        <Unicons.UilLetterEnglishA />
                        <h4>{"languages".toUpperCase()}</h4>
                    </div>
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