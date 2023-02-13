import React from "react";
import Loader from "../../../../loader/loader";
import BlogContent from "./blogContent";


export default function Blog (props) {
    return (
        <div className="blogs fixed-right test">
            <Loader time={500}/>
            <div className="main-size">
                <BlogContent blog={props.blog}/>
            </div>
        </div>
    );
}