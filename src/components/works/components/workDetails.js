import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function WorkDetails (props) {
    return (
        <div className="work-details">
            <div className="main-size mr-top-l">
                <button id="close-details" className="curs-p btn-secondary" onClick={props.handleClick}>
                    <Unicons.UilMultiply />
                </button>
                <h3 className="text-cap big-text text-center mr-b-sm mr-top-l">
                    {props.title}
                </h3>
                <div className="my-grid-second">
                    <div>
                        <img className="rounded-sm" src={props.src} alt={props.title}/> 
                        <div className="ds-fl">
                            <a role="button" href={"#/link"} className="btn-danger text-cap rounded-sm">live</a>
                            <a role="button" href={"#/link"} className="btn-success text-cap rounded-sm mr-lf-sm">buy</a>
                        </div>
                    </div>
                    <div>
                        <div className="mr-b-mini">
                            <h5 className="text-cap">project info:</h5>
                            <p className="sm-text">{props.info}</p>
                        </div>
                        <div>
                            <h5 className="text-cap">project details:</h5>
                            <div className="work-d">
                                <div className="ds-fl">
                                    <strong className="text-cap">client : </strong><span className="text-cap">john stone</span>
                                </div>
                                <div className="ds-fl">
                                    <strong className="text-cap">technologies : </strong><span className="text-cap">iOS, HTML5, CSS3, PHP, Java</span>
                                </div>
                                <div className="ds-fl">
                                    <strong className="text-cap">industry : </strong><span className="text-cap">art & design</span>
                                </div>
                                <div className="ds-fl">
                                    <strong className="text-cap">date : </strong><span className="text-cap">january 16, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}