import React, { memo } from "react";
import BlogsCard from "./blogsCard";

export default memo(function BlogsView ({ blogs, readMore }) {
    return (
        <div className="blogs-view positioh-relative">
            <div className="m-title m-title-top mb-5 text-capitalize">
                <h2 className="fw-normal text-main">recent blogs</h2>
            </div>
            {
                blogs.length? (
                    <>
                    <div className="row">
                        {
                            blogs.length?blogs.map((blog, i)=>  <BlogsCard key={"key-"+i} blog={blog}/>)
                            :<div className="alert alert-info">We don't have any blog post right now! wait for our news!</div>
                        }
                    </div>
                    <div>
                        <button className="read-more"onClick={readMore}>read more</button>
                    </div>
                </>
                ):
                (
                    <div className="alert alert-info">We don't have any blog post right now! wait for our news!</div>
                )
            }
        </div>
    );
})