import React from "react";

export default function ResumeCard (props) {
    return (
        <div className="resume-card">
            <div>
                <h6>{props.from} - {props.to}</h6>
            </div>
            <div>
                <div>
                    <h4>{props.jobTitle}</h4>
                    <h5>{props.jobPlace}</h5>
                </div>
                <div>
                <p>
                    {props.description}
                </p>
                <a href={props.link}>read more</a>
                </div>
            </div>
        </div> 
    );
}