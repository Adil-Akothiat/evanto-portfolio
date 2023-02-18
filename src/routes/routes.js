import React, {Suspense, useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";
// client & query
import client from "../components/pages/blogs/controller/client";
import QUERY from "../components/pages/blogs/controller/query";

import Navigation from "../components/navigation/navigation";
const Home = React.lazy(()=> import("../components/pages/home/home"));
const About = React.lazy(()=> import("../components/pages/about/about"));
const Blogs = React.lazy(()=> import( "../components/pages/blogs/blogs"));
const Blog = React.lazy(()=> import("../components/pages/blogs/components/blog/blog"));
const Contact = React.lazy(()=> import("../components/pages/contact/contact"));
const Portfolio = React.lazy(()=> import("../components/pages/portfolio/portfolio"));
const Resume = React.lazy(()=> import("../components/pages/resume/resume"));

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
            <Suspense fallback={<div>...loading...</div>}>
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
            </Suspense>
        </>
    );
}