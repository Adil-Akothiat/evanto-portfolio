import React from "react";
const skills = [{name:"HTML", rate: 90}, {name:"CSS", rate:85}, {name:"JAVASCRIPT", rate:70}, {name:"REACT/JS", rate: 65}];

export default function Skills () {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <div>
            {
            skills.map((skill, i)=> {
                return (
                    <div key={"skill-"+i}>
                        <div className="rt">
                            <div className="rate"><p>{skill.rate}%</p></div> 
                            <span>{skill.name}</span>
                        </div>
                    </div>
                );
            })
            }
            </div>
        </div>
    );
}