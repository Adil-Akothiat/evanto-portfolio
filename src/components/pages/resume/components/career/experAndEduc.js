import React from "react";

export default function ExperienceAndEducation (props) {
    return (
        <div className="my-card">
            <span className="line-top"></span>
            <div>
                <div className="date">
                    <h6 className="fw-light text-capitalize rounded">{props.from} - {props.to}</h6>
                </div>
                <div className="fw-light my-3">
                    <h5 className="text-capitalize fw-normal">{props.jobTitle}</h5>
                    <h6 className="text-capitalize fw-light mt-1">{props.jobPlace}</h6>
                </div>
            </div>
            <div>
                <div>
                    <p className="fw-light">
                        {props.description}
                    </p>
                </div>
            </div>
        </div> 
    );
}