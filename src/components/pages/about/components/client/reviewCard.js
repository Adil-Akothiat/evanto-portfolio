import React from "react";

export default function ReviewCard (props) {
    return (
        <div className="review-card card text-center">
            <div className="card-header">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="img-thumbnail rounded-circle"
                    width="100"
                    height="100"
                />
                <div className="mt-3">
                    <h5 className="text-capitalize fw-normal">{props.name}</h5>
                    <h6 className="text-capitalize fw-light">designer</h6>
                </div>
            </div>
            <div className="body-card">
                <div>
                    <p className="fw-light">{props.review}</p>
                </div>
                <div>
                    <a href={props.link} role={"button"} className="my-own-btn-link fw-light text-capitalize rounded mx-auto">
                        watch review
                    </a>
                </div>
            </div>
        </div>
    );
}