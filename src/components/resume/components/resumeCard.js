import React from "react";

export default function ResumeCard (props) {
    return (
        <div className="card">
            <span className="line-top"></span>
            <div>
                <div className="date mr-b-mini">
                    <h6 className="sm-text fw-sm text-cap rounded-sm">{props.from} - {props.to}</h6>
                </div>
                <div className="mr-b-mini">
                    <h4 className="text-cap big-text">{props.jobTitle}</h4>
                    <h5 className="text-cap sm-text fw-med">{props.jobPlace}</h5>
                </div>
            </div>
            <div>
                <div>
                    <p className="sm-text fw-sm">
                        {props.description}
                    </p>
                </div>
            </div>
        </div> 
    );
}