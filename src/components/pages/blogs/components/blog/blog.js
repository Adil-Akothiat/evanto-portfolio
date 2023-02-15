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
            <div className="main-size position-relative">
                {
                    props.open?
                    (
                        <div className="position-fixed share-bg" data-aos="fade-top" data-aos-duration="1000" data-aos-delay="0">
                            <Share handleClick={props.closeShareHandler}/>
                        </div>
                    ):null
                }
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                    <div className="mt-4">
                        <div className="author">
                            <div>
                                <img className="rounded" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="author"/>
                            </div>
                            <div className="author-info">
                                <div>
                                    <h4 className="text-capitalize fw-light">adil khayt</h4>
                                    <h6 className="fw-light">Web and Mobile Researcher, ScienceSoft</h6>
                                </div>
                                <div className="my-3">
                                    <p>
                                        Chris Impey is a writer based in New York City. He's interested in all things tech, science, and photography related, and likes to yo-yo in his free time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="b-t fw-bold text-capitalize mt-5">{props.blog.title}</h1>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between my-5">
                            <div className="da-ca-sh d-flex flex-wrap align-items-center r-c">
                                <h6 className="fw-normal">03 min reading in </h6>
                                <span>━</span>
                                <h5 className="fw-normal text-capitalize">{props.blog.category}</h5>
                                <span>━</span>
                                <div className="blog-date d-flex align-items-center">
                                    <Unicons.UilCalender />
                                    <span className="mx-2">{new Date(...props.blog.date.split("-")).toDateString()}</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="share-btn rounded text-capitalize" onClick={props.openShareHandler}>
                                    <Unicons.UilShare />
                                    share
                                </button>
                            </div>
                        </div>
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