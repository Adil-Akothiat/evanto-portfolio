import React from "react";

export default function Rate (props) {
    return (
        <div className="rate">
            <h5 className="text-capitalize mt-2 fw-normal">{props.skill}</h5>
            <div className="my-2">
                <div style={{width: props.value+"%"}}><span>{props.value+"%"}</span></div>
            </div>
        </div>
    );
}