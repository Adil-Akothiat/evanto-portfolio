import React, {useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";

import Navigation from "../components/navigation/navigation";
import About from "../components/pages/about/about";
import Blogs from "../components/pages/blogs/blogs";
import Blog from "../components/pages/blogs/components/blog/blog";
import Contact from "../components/pages/contact/contact";
import Home from "../components/pages/home/home";
import Portfolio from "../components/pages/portfolio/portfolio";
import Resume from "../components/pages/resume/resume";

// client & query
import client from "../components/pages/blogs/controller/client";
import QUERY from "../components/pages/blogs/controller/query";

export default function MyRoutes () {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        const getBlogs = async ()=> {
        const {myPortfolioBlogs} = await client.request(QUERY);
        setBlogs(myPortfolioBlogs);
        }
        getBlogs();
    }, [])

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/resume" element={<Resume />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/blogs" element={<Blogs blogs={blogs}/>}/>
                <Route path="/contact" element={<Contact />}/>
                {
                    blogs?blogs.map((b, i)=> <Route 
                        key={"key-"+i}
                        path={`/blogs/${b.id}`}
                        element={
                            <Blog 
                                blog={b}
                            />
                        }
                    />)
                    :alert("data not found!")
                }
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </>
    );
}