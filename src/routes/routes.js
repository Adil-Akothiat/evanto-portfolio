import React, { useEffect, useState, memo, Suspense, lazy } from "react";
import { Route, Routes} from "react-router-dom";
// client & query
import client from "../components/pages/blogs/controller/client";
import QUERY from "../components/pages/blogs/controller/query";
import Loader from "../components/loader/loader";
import Navigation from "../components/navigation/navigation";

const Home = lazy(()=> import("../components/pages/home/home"));
const About = lazy(()=> import("../components/pages/about/about"));
const Blogs = lazy(()=> import("../components/pages/blogs/blogs"));
const Blog = lazy(()=> import("../components/pages/blogs/components/blog/blog"));
const Contact = lazy(()=> import("../components/pages/contact/contact"));
const Portfolio = lazy(()=> import("../components/pages/portfolio/portfolio"));
const Resume  = lazy(()=> import("../components/pages/resume/resume"));

export default memo(function MyRoutes () {
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
            <Suspense fallback={<Loader />}>
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
                            element={<Blog blog={b} />}
                        />)
                        :<div className="alert alert-warning">Data fail try again!</div>
                    }
                </Routes>    
            </Suspense>
        </>
    );
})