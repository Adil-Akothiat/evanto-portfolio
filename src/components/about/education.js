import React from "react";
import Educations  from "../../user/education.json";

export default function Education () {
    return (
        <div className="experience education">
            <h3>Education</h3>
            <div>
            {
                Educations.map((exp, i)=> (<div className="exp" key={"experience-"+i}>
                    <span>{exp.date}</span>
                    <h4>{exp.degree}</h4>
                    <h5>{exp.university}</h5>
                    <p>{exp.description}</p>
                </div>))
            }
            </div>
        </div>
    );
}