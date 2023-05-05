import React from "react";
import ExperienceAndEducation from "./experAndEduc";
import employmentHistory from "../../admin/employmentHistory.json";
import education from "../../admin/education.json";

export default function Career () {
    return (
        <>  
            <div className="m-title m-title-top mb-5">
                <h2 className="fw-normal text-main">my resume</h2>
            </div>
            <div className="m-title">
                <h2>employment history</h2>
            </div>
            <div className="my-grid experience">
                {
                    employmentHistory.map((exp, i)=> (
                        <ExperienceAndEducation
                            key={"experience-"+i}
                            from={exp.from}
                            to={exp.to}
                            jobTitle={exp.job}
                            jobPlace={exp.company}
                            description={exp.description}
                            link={exp.link}
                        />
                    ))
                }
            </div>
            <div className="m-title">
                <h2>education</h2>
            </div>
            <div className="my-grid education">
                {
                    education.map((edu, i)=> (
                        <ExperienceAndEducation
                            key={"key-"+i}
                            from={edu.from}
                            to={edu.to}
                            jobTitle={edu.degree}
                            jobPlace={edu.university}
                            description={edu.description}
                            link={edu.link}
                        />
                    ))
                }
            </div>
        </>
    );
}