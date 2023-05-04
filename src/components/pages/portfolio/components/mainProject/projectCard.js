import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function PorjectCard (props) {
    return (
        <div className={`project-card ${props.class}`}>
            <img className="img-fluid" src={require("../../../../../assets/portfolio/"+props.src)} alt={props.title}/>
            <div>
                <button 
                    className="open-project" 
                    onClick={props.handleClick} 
                    data-id={props.id}
                >
                    <AiOutlinePlus />
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