import React, { useState, useEffect, useCallback, lazy, memo, Suspense } from "react";
import "../../../styles/pages/blogs.css";
import Loader from "../../loader/loader";
const BlogsView = lazy(()=> import("./components/blogs/blogsView"));

export default memo(function Blogs (props) {
  const [blogs, setBlogs] = useState([]);
  // Pagination
  const [startPoint, setStartPoint] = useState(0);
  const itemPerPage = 6;
  const [endPoint, setEndPoint] = useState(itemPerPage);
  // Get the blogs
  useEffect(()=> {
    setBlogs(props.blogs.slice(startPoint, endPoint));
    // set prev button disabled or enabled
    const prev = document.getElementById("prev");
    if(prev) {
      if(startPoint===0) {
        prev.setAttribute("disabled", true);
      }else {
        prev.removeAttribute("disabled");
      }
    }
    // set next button disabled or enabled
    const next = document.getElementById("next");
    if(next) {
      if(endPoint> props.blogs.length) {
        next.setAttribute("disabled", true);
      }else {
        next.removeAttribute("disabled");
      }
    }
  }, [startPoint, endPoint, props.blogs])
  // next page and prev page
  const nextPage = useCallback(function () {
    if(endPoint < props.blogs.length) {
      setStartPoint(prevState=> prevState + itemPerPage);
      setEndPoint(prevState=> prevState + itemPerPage);
    }
  }, [endPoint, props.blogs.length])
  const prevPage = useCallback(function ({target}) {
    if(startPoint > 0) {
      target.removeAttribute("disabled");
      setStartPoint(prevState=> prevState - itemPerPage);
      setEndPoint(prevState=> prevState - itemPerPage);
    }
  }, [startPoint]);

  return (
    <div className="blogs fixed-right test">
      <Suspense fallback={<Loader />}>
        <div className="main-size">
          <div className="position-relative">
              <BlogsView
                nextHandler={nextPage} 
                prevHandler={prevPage} 
                blogs={blogs}
              />
          </div>
        </div>
      </Suspense>
    </div>
  );
})