import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Blog (props) {
    return (
        <div className="blog position-relative">
            <button id="close" onClick={props.handleClick}><Unicons.UilMultiply /></button>
            <div className="d-flex align-items-center r-c border-bottom py-2">
                <h6 className="fw-normal">03 min reading in </h6>
                <span>━</span>
                <h5 className="fw-normal text-capitalize">{props.blog.category}</h5>
            </div>
            <div className="mt-4">
                <div className="author mb-5">
                    <img className="img-thumbnail rounded-circle" src="https://www.scnsoft.com/blog-pictures/ui-ux/corporate-website-redesign.png" alt="author"/>
                    <h4 className="text-capitalize mt-3 fw-light">adil khayt</h4>
                    <h6 className="fw-light">Web and Mobile Researcher, ScienceSoft</h6>
                </div>
                <div className="social text-center pb-3">
                    <a href={"#blog"}><Unicons.UilFacebook /></a>
                    <a className="mx-3" href={"#blog"}><Unicons.UilInstagramAlt /></a>
                    <a href={"#blog"}><Unicons.UilLinkedin /></a>
                </div>
                <h2 className="fw-normal text-center text-capitalize border-top py-3">{props.blog.title}</h2>
                <p className="description fw-normal">
                    {props.blog.description}
                </p>
            </div>
            {/* <div className="my-5 main-img">
                <img className="img-fluid rounded-top" src={props.blog.titleImage.url} alt={props.blog.category}/>
            </div> */}
            <div className="rich-text" dangerouslySetInnerHTML={{"__html": props.blog.richText.html}}></div>
        </div>
    );
}