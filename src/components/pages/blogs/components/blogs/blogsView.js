import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Pagination from "../pagination/pagination";
import { Link } from "react-router-dom";

export default function BlogsView (props) {
    return (
        <div className="blogs-view positioh-relative">
            <div className="m-title m-title-top mb-5 text-capitalize">
                <h2 className="fw-normal text-main">recent blogs</h2>
            </div>
            <div className="row">
                {
                    props.blogs?props.blogs.map((b, i)=> (
                    <div key={"key-"+i} className="col-xl-4 col-md-6 col-sm-6 mb-4">
                        <div className="card" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                            <div className="overflow-hidden rounded-top border-bottom">
                                <img className="img-fluid rounded-top" src={b.titleImage.url} alt={b.category}/>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="rounded text-capitalize">{b.category}</span>
                                    <div className="d-flex align-items-center date"> 
                                        <Unicons.UilCalendarAlt />
                                        <p className="fw-light">{b.date}</p>
                                    </div>
                                </div>
                                <div className="blog-title">
                                    <h3 
                                        className="fw-bolder text-capitalize"
                                    >
                                        <Link 
                                            to={"/blogs/"+b.id}
                                            data-id={b.id}
                                            onClick={()=> window.scrollTo(0, 0)}
                                        >{b.title}</Link>
                                    </h3>
                                </div>
                                <div className="blog-description">
                                    <p className="fw-light">
                                        {b.description.substr(0, 100)+"..."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )):<h2>data was not found! please try again and fix error!</h2>
                }
            </div>
            <div>
                <Pagination blogs={props.blogs} next={props.nextHandler} prev={props.prevHandler}/>
            </div>
        </div>
    );
}