import React from "react";

import { AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";


import ImageGallery from "./imageGallery";
import Video from "./video";

export default function projectDetails (props) {
    return (
        <div className="project-details">
            <div className="main-size">
                <button 
                    id="close-details" 
                    className="btn btn-primary main-bg" 
                    onClick={props.handleClick}
                    style={{border: "none"}}
                >
                    <MdOutlineClose />
                </button>
                <h3 className="text-capitalize fw-normal my-4">
                    {props.title}
                </h3>
                <div className="my-grid-second">
                    <div>
                        <ImageGallery details={props.details}/>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        <h5 className="text-capitalize mb-3">
                            description
                        </h5>
                        <div className="detail mb-4">
                            <div className="d-flex mb-2">
                                <BsFillPersonCheckFill /><span className="fw-light text-capitalize ml-2">{props.details.client}</span>
                            </div>
                            <div className="d-flex mb-2">
                                <TbWorld /><span className="fw-light ml-2"><a href={props.details.link}>{props.details.link}</a></span>
                            </div>
                            <div className="d-flex mb-2">
                                <BiCategory /><span className="fw-light ml-2 text-capitalize">{props.details.category}</span>
                            </div>
                            <div className="d-flex mb-2">
                                <AiOutlineCalendar /><span className="fw-light ml-2">{props.details.date}</span>
                            </div>
                        </div>
                        <h5 className="text-capitalize my-3">
                            technologies
                        </h5>
                        <div className="d-flex flex-wrap stack mb-4">
                            {props.details.technologies.map((e, i)=> <span key={"key-"+i} className="rounded fw-light text-capitalize my-1">{e}</span>)}
                        </div>
                    </div>
                </div>
                <div>
                    {props.details.source?<Video src={props.details.source}/>:null}
                </div>
            </div>
        </div>
    );
}