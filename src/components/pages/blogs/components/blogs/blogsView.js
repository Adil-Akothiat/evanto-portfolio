import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function BlogsView (props) {
    return (
        <div className="blogs-view">
            <div className="row">
                {
                    props.blogs.map((b, i)=> (
                    <div key={"key-"+i} className="col-xl-4 col-md-6 col-sm-6 mb-4">
                        <div className="card">
                            <div className="overflow-hidden rounded-top">
                                <img className="img-fluid rounded-top" src={b.image} alt={b.category}/>
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
                                    <h3 className="fw-bolder text-capitalize">{b.title}</h3>
                                </div>
                                <div className="blog-description">
                                    <p className="fw-light">
                                        {b.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
}