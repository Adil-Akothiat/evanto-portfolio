import React, { memo, useCallback } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { CgShare } from "react-icons/cg";
import { BsArrowUp } from "react-icons/bs";
import Form from "./form/form";
import Share from "./share/share";
import Author from "./author";

export default memo(function BlogContent (props) {
    const scrollTop = useCallback(()=> window.scrollTo(0, 0), []);
    return (
       <>
            <button 
                onClick={scrollTop}
                className="scroll-top rounded"
            ><BsArrowUp /></button>
            <div className="main-size position-relative">
                {
                    props.open?
                    (
                        <div className="position-fixed share-bg">
                            <Share handleClick={props.closeShare}/>
                        </div>
                    ):null
                }
                <div>
                    <div className="mt-4">
                        <Author 
                            image={props.blog.author.profileImage}
                            name={props.blog.author.name}
                            job={props.blog.author.job}
                            bio={props.blog.author.bio}
                        />
                        <div>
                            <h1 className="b-t fw-bold text-capitalize mt-5">{props.blog.title}</h1>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between my-5">
                            <div className="da-ca-sh d-flex flex-wrap align-items-center r-c">
                                <span>━</span>
                                <h5 className="fw-normal text-capitalize">{props.blog.category}</h5>
                                <span>━</span>
                                <div className="blog-date d-flex align-items-center">
                                    <AiOutlineCalendar />
                                    <span className="mx-2">{props.blog.created.split(".")[0]}</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="share-btn rounded text-capitalize" onClick={props.openShare}>
                                    <CgShare />
                                    <span className="mx-2">Share</span>
                                </button>
                            </div>
                        </div>
                        <img src={props.blog.image} alt="text" />
                        <p className="description fw-light my-4">
                            {props.blog.description}
                        </p>
                    </div>
                    <div className="rich-text" dangerouslySetInnerHTML={{"__html": props.blog.body}}></div>
                    <Form />
                </div>
            </div>
       </>
    );
})