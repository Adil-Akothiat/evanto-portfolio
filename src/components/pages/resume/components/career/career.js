import React from "react";
import ResumeCard from "./resumeCard";

export default function Career (props) {
    return (
        <>  
            <div className="m-title mb-5">
                <h2 className="fw-normal">experience</h2>
            </div>
            <div className="my-grid experience">
                {
                    props.resume.experiences.map((exp, i)=> {
                        if(i===0 || i===1) {
                            return (
                                <ResumeCard 
                                    key={"experience-"+i}
                                    from={exp.from}
                                    to={exp.to}
                                    jobTitle={exp.job}
                                    jobPlace={exp.company}
                                    description={exp.description}
                                    link={exp.link}
                                />
                            );
                        }else {
                            return (
                                <ResumeCard 
                                    key={"experience-"+i}
                                    from={exp.from}
                                    to={exp.to}
                                    jobTitle={exp.job}
                                    jobPlace={exp.company}
                                    description={exp.description}
                                    link={exp.link}
                                    class="hi-sc-ef scroll"
                                />
                            );
                        }
                    })
                }
            </div>
            <div className="m-title mb-5">
                <h2 className="fw-normal">education</h2>
            </div>
            <div className="my-grid education">
                {
                    props.resume.educations.map((edu, i)=> (
                        <ResumeCard 
                            key={"key-"+i}
                            from={edu.from}
                            to={edu.to}
                            jobTitle={edu.degree}
                            jobPlace={edu.university}
                            description={edu.description}
                            link={edu.link}
                            class="hi-sc-ef scroll"
                        />
                    ))
                }
            </div>
        </>
    );
}