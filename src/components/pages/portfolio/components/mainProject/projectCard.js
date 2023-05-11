import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function PorjectCard (props) {
    return (
        <div className={`project-card ${props.class}`}>
            <img 
                src={props.src} 
                alt={props.title}
                loading="lazy"
            />
            <div>
                <button 
                    className="open-project" 
                    onClick={props.handleClick} 
                    data-id={props.id}
                    aria-label="open project details"
                >
                    <AiOutlinePlus />
                </button>
                <div className="translate-middle top-50 start-50">
                    <strong className="text-capitalize fw-normal">
                        {props.title}
                    </strong>
                </div>
            </div>
        </div>
    );
}