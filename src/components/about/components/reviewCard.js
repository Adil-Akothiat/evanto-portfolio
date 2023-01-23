import React from "react";

export default function ReviewCard (props) {
    return (
        <div className="card hi-sc-ef scroll">
            <div>
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="rounded-cir sm-size"
                    />
                <h4 className="text-cap">{props.name}</h4>
            </div>
            <div>
                <p className="sm-text">{props.review}</p>
            </div>
            <div>
                <a href={props.link} role={"button"} className="btn-secondary text-cap rounded-sm mr-auto">
                    watch review
                </a>
            </div>
        </div>
    );
}