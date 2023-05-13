import React, { memo, useState, useEffect, useCallback } from "react";
import "../../../styles/pages/blogs.css";
import BlogsView from "./components/blogsView";

export default memo(function Blogs (props) {
  const [blogs, setBlogs] = useState([]);
  const readMoreHandler = useCallback(({target})=> {
    if(target.textContent==="read more") {
      setBlogs(props.blogs);
      target.textContent="read less";
    }else {
      setBlogs(props.blogs.slice(0, 3));
      target.textContent="read more";
    }
  }, [props.blogs])
  useEffect(()=> {
    setBlogs(props.blogs.slice(0, 3));
  }, [props.blogs])
  return (
    <div className="blogs fixed-right test">
      <div className="main-size">
        <div className="position-relative">
          <BlogsView
            blogs={blogs}
            readMore={readMoreHandler}
          />
        </div>
      </div>
    </div>
  );
})