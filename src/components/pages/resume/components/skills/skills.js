import React from "react";
import CircleProgressBar from "./CircleProgressBar";
import LanguageProgress from "./languageProgress";
import * as Unicons from '@iconscout/react-unicons';

export default function Skills (props) {
    return (
        <div className="my-4">
            <div className="m-title mb-5">
                <h2 className="fw-normal">skills</h2>
            </div>
            <div className="my-grid skills">
                <div className="my-card">
                    <div className="skill hi-sc-ef scroll">
                        {
                            props.resume.skills.map((s, i)=> <CircleProgressBar key={"key-"+i} value={s.rate} skill={s.skill}/>)
                        }
                    </div>
                </div>
                <div className="hi-sc-ef scroll my-card" style={{height:"fit-content"}}>
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
                        <div className="card p-3 certification">
                           <div>
                                <div className="svg-certif mb-2">
                                    <Unicons.UilAward />
                                </div>
                                <div className="certif-data text-capitalize">
                                    <h4 className="fw-normal mb-2">build responsive website using html, css, js And Bootstrap</h4>
                                    <h5 className="fw-normal text-uppercase">educba</h5>
                                    <h6 className="fw-light my-2">October 2022</h6>
                                    <h6 className="fw-light my-2">credential ID U49M32ANQ</h6>
                                    <a role="button" className="btn btn-secondary" href={"#credential"}>show credential</a>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}