import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function WorkDetails (props) {
    return (
        <div className="work-details">
            <div className="main-size">
                <button id="close-details" className="curs-p btn-secondary" onClick={props.handleClick}>
                    <Unicons.UilMultiply />
                </button>
                <h3 className="text-cap big-text text-center mr-b-sm">
                    {props.title}
                </h3>
                <div className="my-grid-second">
                    <div>
                        <img src={props.src} alt={props.title}/> 
                    </div>
                    <div>
                        <div className="mr-b-mini">
                            <h5 className="text-cap">project info:</h5>
                            <p className="sm-text">{props.info}</p>
                        </div>
                        <div>
                            <h5 className="text-cap">project details:</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}