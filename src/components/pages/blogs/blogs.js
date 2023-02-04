import React from "react";
import BlogsView from "./components/blogs/blogsView";
import "../../../styles/pages/blogs.css";

export default function Blogs () {
    return (
        <div className="blogs fixed-right test">
            <div className="main-size">
                <div className="m-title m-title-top mb-5 text-capitalize">
                    <h2 className="fw-normal text-main">recent blogs</h2>
                </div>
                <BlogsView />
            </div>
        </div>
    );
}