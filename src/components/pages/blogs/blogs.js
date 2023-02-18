import React, {useState, useEffect, Suspense} from "react";
import "../../../styles/pages/blogs.css";

const BlogsView = React.lazy(()=> import("./components/blogs/blogsView"));

export default function Blogs (props) {
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
  function nextPage () {
    if(endPoint < props.blogs.length) {
      setStartPoint(prevState=> prevState + itemPerPage);
      setEndPoint(prevState=> prevState + itemPerPage);
    }
  }

  function prevPage ({target}) {
    if(startPoint > 0) {
      target.removeAttribute("disabled");
      setStartPoint(prevState=> prevState - itemPerPage);
      setEndPoint(prevState=> prevState - itemPerPage);
    }
  }

  return (
    <div className="blogs fixed-right test">
      <div className="main-size">
        <Suspense fallback={<div>...loading...</div>}>
          <div className="position-relative">
            <BlogsView
              nextHandler={nextPage} 
              prevHandler={prevPage} 
              blogs={blogs}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
}