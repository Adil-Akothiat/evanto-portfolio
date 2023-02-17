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
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                <Skill />
            </div>
            <div className="m-title my-5">
                <h2>languages</h2>
            </div>
            <div className="languages" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                <Languages />
            </div>
            <div className="m-title my-5">
                <h2>Licenses & Certifications</h2>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                <Certificat />
            </div>
        </>
    );
}