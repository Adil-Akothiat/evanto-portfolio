import React from "react";

export default function ReviewCard (props) {
    return (
        <div className="my-card">
            <div>
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="rounded-circle"
                    width="100"
                    height="100"
                    />
                <h5 className="text-capitalize mt-3 fw-normal">{props.name}</h5>
            </div>
            <div>
                <p className="fw-light">{props.review}</p>
            </div>
            <div>
                <a href={props.link} role={"button"} className="my-own-btn-link fw-light text-capitalize rounded mx-auto">
                    watch review
                </a>
            </div>
        </div>
    );
}