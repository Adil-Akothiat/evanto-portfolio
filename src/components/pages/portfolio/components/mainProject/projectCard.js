import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function PorjectCard (props) {
    return (
        <div className={`project-card rounded ${props.class}`}>
            <img className="rounded img-fluid" src={props.src} alt={props.title}/>
            <div>
                <button 
                    className="open-project rounded" 
                    onClick={props.handleClick} 
                    data-id={props.id}
                >
                    <Unicons.UilPlus />
                </button>
                <div className="translate-middle top-50 start-50">
                    <h4 className="text-capitalize fw-normal">
                        {props.title}
                    </h4>
                </div>
            </div>
        </div>
    );
}