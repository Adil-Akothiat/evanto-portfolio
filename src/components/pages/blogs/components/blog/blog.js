import React from "react";
import * as Unicons from "@iconscout/react-unicons";

import Form from "./form/form";
import Share from "./share/share";
import Loader from "../../../../loader/loader";


export default function Blog (props) {
    return (
        <div className="blog fixed-right">
            <Loader time={500}/>
            <button 
                onClick={()=> window.scrollTo(0, 0)}
                className="scroll-top"
            ><Unicons.UilTopArrowFromTop /></button>
            <div className="main-size" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div className="position-relative">
                    {
                        props.open?(
                        <div>
                            <div className="position-fixed share-bg"></div>
                            <Share handleClick={props.closeShareHandler}/>
                        </div>
                        ):null
                    }
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex flex-wrap align-items-center r-c">
                            <h6 className="fw-normal">03 min reading in </h6>
                            <span>━</span>
                            <h5 className="fw-normal text-capitalize">{props.blog.category}</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="share-btn rounded text-capitalize" onClick={props.openShareHandler}>
                                <Unicons.UilShare />
                                share
                            </button>
                            <div className="blog-date d-flex align-items-center">
                                <Unicons.UilCalendarAlt />
                                <span className="mx-2">{props.blog.date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="author border-bottom pb-3">
                            <img className="img-thumbnail rounded-circle" src="https://www.scnsoft.com/blog-pictures/ui-ux/corporate-website-redesign.png" alt="author"/>
                            <h4 className="text-capitalize mt-3 fw-light">adil khayt</h4>
                            <h6 className="fw-light">Web and Mobile Researcher, ScienceSoft</h6>
                        </div>
                        <h2 className="fw-bold text-capitalize mt-3">{props.blog.title}</h2>
                        <img src={props.blog.titleImage.url} alt={props.blog.category} />
                        <p className="description fw-light my-4">
                            {props.blog.description}
                        </p>
                    </div>
                    <div className="rich-text" dangerouslySetInnerHTML={{"__html": props.blog.richText.html}}></div>
                    <Form />
                </div>
            </div>
        </div>
    );
}