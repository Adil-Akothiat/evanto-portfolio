import React from "react";
import Certificat from "./certification";
import Languages from "./languages";
import Skill from "./skill";


export default function SkillStack () {
    return (
        <>
            <div className="m-title mb-5">
                <h2>skills</h2>
            </div>
            <div>
                <Skill />
            </div>
            <div className="m-title my-5">
                <h2>languages</h2>
            </div>
            <div className="languages">
                <Languages />
            </div>
            <div className="m-title my-5">
                <h2>Licenses & Certifications</h2>
            </div>
            <div>
                <Certificat />
            </div>
        </>
    );
}