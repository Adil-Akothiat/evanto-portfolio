import React, {useState, useEffect} from "react";
import BlogsView from "./components/blogs/blogsView";
import "../../../styles/pages/blogs.css";
import Loader from "../../loader/loader";
import client from "./controller/client";
import QUERY from "./controller/query";

export default function Blogs (props) {
    const [blogs, setBlogs] = useState([]);
  // blogs length
  const [blogsLength, setBlogsLength] = useState(0);

  // Pagination
  const [startPoint, setStartPoint] = useState(0);
  const itemPerPage = 6;
  const [endPoint, setEndPoint] = useState(itemPerPage);

  // Get the blogs
  useEffect(()=> {
    const getBlogs = async ()=> {
      try {
        const {myPortfolioBlogs} = await client.request(QUERY);
        setBlogsLength(myPortfolioBlogs.length);
        setBlogs(myPortfolioBlogs.slice(startPoint, endPoint));
      } catch (err) {
        console.log("err");
      }
    }
    getBlogs();
  }, [startPoint, endPoint])

  // next page and prev page
    function nextPage () {
        if(endPoint < blogsLength) {
            setStartPoint(prevState=> prevState + itemPerPage);
            setEndPoint(prevState=> prevState + itemPerPage);
        }
    }

    function prevPage () {
        if(startPoint > 0) {
            setStartPoint(prevState=> prevState - itemPerPage);
            setEndPoint(prevState=> prevState - itemPerPage);
        }
    }

    return (
        <div className="blogs fixed-right test">
            <Loader time={500}/>
            <div className="main-size">
                <div className="position-relative">
                <BlogsView
                    nextHandler={nextPage} 
                    prevHandler={prevPage} 
                    blogs={blogs}
                />
                </div>
            </div>
        </div>
    );
}