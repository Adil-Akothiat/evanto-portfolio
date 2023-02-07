import React, {useState, useEffect} from "react";
import BlogsView from "./components/blogs/blogsView";
import "../../../styles/pages/blogs.css";
import Loader from "../../loader/loader";
import client from "./controller/client";
import QUERY from "./controller/query";
import Blog from "./components/blog/blog";

export default function Blogs () {
    const [allBlogs, setAllBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [blogId, setBlogId] = useState("");
    const [openBlog, setOpenBlog] = useState(false);

    // Pagination
    const [startPoint, setStartPoint] = useState(0);
    const itemPerPage = 6;
    const [endPoint, setEndPoint] = useState(itemPerPage);

    function getIdBlog ({target}) {
        const {id} = target.dataset;
        setBlogId(id);
        setOpenBlog(true);
    }
    function disabled(id, boolean) {
        if (boolean) document.getElementById(id).setAttribute("disabled", true);
        else document.getElementById(id).removeAttribute("disabled");
        return;
    }
    function nextPage () {
        window.scrollTo(0, 0);
        if(endPoint <= allBlogs.length) {
            setStartPoint(prevState=> prevState + itemPerPage);
            setEndPoint(prevState=> prevState + itemPerPage);
        }
    }
    function prevPage () {
        window.scrollTo(0, 0);
        if(startPoint > 0) {
            setStartPoint(prevState=> prevState - itemPerPage);
            setEndPoint(prevState=> prevState - itemPerPage);
        }
    }
    //blogs
    useEffect(()=> {
        const getBlogs = async ()=> {
            const {myPortfolioBlogs} = await client.request(QUERY);
            setAllBlogs(myPortfolioBlogs);
            setBlogs(myPortfolioBlogs.slice(startPoint, endPoint));
        };
        getBlogs();
    }, [startPoint, endPoint])
    //pagination
    useEffect(()=> {
        if (startPoint <= 0) disabled("prev", true);
        else disabled("prev", false);
        if (endPoint >= allBlogs.length) disabled("next", true);
        else disabled("next", false);
    }, [startPoint, endPoint, allBlogs]);
    return (
        <div className="blogs fixed-right test">
            <Loader time={500}/>
            <div className="main-size">
                <div className="m-title m-title-top mb-5 text-capitalize">
                    <h2 className="fw-normal text-main">recent blogs</h2>
                </div>
                <div className="position-relative">
                    {
                        openBlog?null:<BlogsView 
                            nextHandler={nextPage} 
                            prevHandler={prevPage} 
                            blogs={blogs} 
                            handleClick={getIdBlog}
                        />
                    }
                    {
                        openBlog?<Blog blog={blogs.filter(({id})=> id === blogId)[0]}/>:null
                    }
                </div>
            </div>
        </div>
    );
}