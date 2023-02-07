import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Pagination from "../pagination/pagination";

export default function BlogsView (props) {
    // const [startPoint, setStartPoint] = useState(0);
    // const [endPoint, setEndPoint] = useState(6);
    // const [blogs, setBlogs] = useState(props.blogs.slice(startPoint, endPoint));
    // const itemPerPage = 6;

    // function nextHandler () {
    //     console.log("test")
    // }
    // function prevHandler () {
    //     console.log("test")
    // }
    // useState(()=> {
    //     setBlogs(props.blogs.slice(startPoint, endPoint));
    // }, [startPoint, endPoint])
    return (
        <div className="blogs-view positioh-relative">
            <div className="row">
                {
                    props.blogs.map((b, i)=> (
                    <div key={"key-"+i} className="col-xl-4 col-md-6 col-sm-6 mb-4">
                        <div className="card">
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
                                        data-id={b.id}
                                        onClick={props.handleClick}
                                    >
                                        {b.title}
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
                    ))
                }
            </div>
            <div>
                <Pagination blogs={props.blogs} next={props.nextHandler} prev={props.prevHandler}/>
            </div>
        </div>
    );
}