import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import ResumeCard from "./resumeCard";

export default function Career (props) {
    return (
        <div className="pd-4">  
            <div className="head-page">
                <h2>resume</h2>
            </div>
            <div className="body-page">
                <div>
                    <div className="rs-head">
                        <Unicons.UilBriefcaseAlt />
                        <h4>{"experience".toUpperCase()}</h4>
                    </div>
                    <div>
                        {
                            props.resume.experiences.map((exp, i)=> (
                                <ResumeCard 
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
                </div>
                <div>
                    <div className="rs-head">
                        <Unicons.UilAward />
                        <h4>{"education".toUpperCase()}</h4>
                    </div>
                    <div>
                        {
                            props.resume.educations.map((educ, i)=> (
                                <ResumeCard 
                                    key={"education-"+i}
                                    from={educ.from}
                                    to={educ.to}
                                    jobTitle={educ.degree}
                                    jobPlace={educ.university}
                                    description={educ.description}
                                    link={educ.link}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}