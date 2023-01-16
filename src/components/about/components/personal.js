import React from "react";

export default function Personal (props) {
    return (
        <div className="pd-4">
            <div className="head-page">
                <h2>about me</h2>
            </div>
            <div className="body-page">
                <div>
                    <p>
                        {props.personal.description}
                    </p>
                    <a href={"#CV"} role="button" id="download-cv">
                        download cv
                    </a>
                </div>
                <div className="personal-info">
                    <div>
                        <span>Age</span><span>{props.personal.age} Years</span>
                    </div>
                    <div>
                        <span>Nationality</span><span>{props.personal.nationality}</span>
                    </div>
                    <div>
                        <span>Languages</span><span>{props.personal.languages}</span>
                    </div>
                    <div>
                        <span>Address</span><span>{props.personal.address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}