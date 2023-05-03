import React, { useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";
// client & query
import client from "../components/pages/blogs/controller/client";
import QUERY from "../components/pages/blogs/controller/query";
import Navigation from "../components/navigation/navigation";
import Home from "../components/pages/home/home";
import About from "../components/pages/about/about";
import Blogs from "../components/pages/blogs/blogs";
import Blog from "../components/pages/blogs/components/blog/blog";
import Contact from "../components/pages/contact/contact";
import Portfolio from "../components/pages/portfolio/portfolio";
import Resume from "../components/pages/resume/resume";

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
                    :<p>....wait</p>
                }
            </Routes>
        </>
    );
}