import React, { useState, useEffect, lazy, memo, Suspense, useCallback } from "react";
import "../../../styles/pages/blogs.css";
import Loader from "../../loader/loader";
const BlogsView = lazy(()=> import("./components/blogs/blogsView"));

export default memo(function Blogs (props) {
  const [blogs, setBlogs] = useState([]);
  const setBlogsCustom = useCallback(()=> {
    const myBlogs = [];
      props.blogs.forEach((b, i)=> (i+1)<=3?myBlogs.push(b):null)
      setBlogs(myBlogs)
  }, [props.blogs])
  useEffect(()=> {
    if(props.blogs) {
      setBlogsCustom()
    }
  }, [props.blogs, setBlogsCustom])
  const readMoreHandler = ({target})=> {
    if(target.textContent==="read more") {
      setBlogs(props.blogs);
      target.textContent="read less";
    }else {
      setBlogsCustom();
      target.textContent="read more";
    }
  }
  return (
    <div className="blogs fixed-right test">
      <Suspense fallback={<Loader />}>
        <div className="main-size">
          <div className="position-relative">
              <BlogsView
                blogs={blogs}
                readMore={readMoreHandler}
              />
          </div>
        </div>
      </Suspense>
    </div>
  );
})