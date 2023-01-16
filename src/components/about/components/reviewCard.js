import React from "react";

export default function ReviewCard (props) {
    return (
        <div>
            <div>
                <img src={props.image} alt={props.name} />
                <h4>{props.name}</h4>
            </div>
            <div>
                <p>{props.review}</p>
            </div>
            <div>
                <a href={props.link} role={"button"}>
                    watch review
                </a>
            </div>
        </div>
    );
}