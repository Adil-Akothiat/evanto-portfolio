import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";

export default function BlogsCard ({ blog }) {
    const scrollTop = ()=> window.scrollTo(0, 0);
    return (
        <div 
            className="col-xl-4 col-md-6 col-sm-6 mb-4"
        >
            <div className="card">
                <div className="overflow-hidden rounded-top border-bottom">
                    <img 
                        className="rounded-top" 
                        src={blog.image} 
                        alt="text"
                        loading="lazy"
                    />
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="rounded text-capitalize">{blog.category}</span>
                        <div className="d-flex align-items-center date"> 
                            <AiOutlineCalendar />
                            <p className="fw-light">{blog.created.split("T")[0]}</p>
                        </div>
                    </div>
                    <div className="blog-title">
                        <h3 
                            className="fw-bolder text-capitalize"
                        >
                            <Link 
                                to={"/blogs/"+blog.id}
                                data-id={blog.id}
                                onClick={scrollTop}
                            >{blog.title}</Link>
                        </h3>
                    </div>
                    <div className="blog-description">
                        <p className="fw-light">
                            {blog.description.substr(0, 100)+"..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}