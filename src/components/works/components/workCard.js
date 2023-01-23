import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function WorkCard (props) {
    return (
        <div className="work-card rounded-sm">
            <img className="rounded-sm" src={props.src} alt={props.title}/>
            <div>
                <button id="open-work" className="curs-p" onClick={props.handleClick} data-id={props.id}>
                    <Unicons.UilPlus />
                </button>
                <div className="center">
                    <h4 className="med-text">
                        {props.title}
                    </h4>
                </div>
            </div>
        </div>
    );
}