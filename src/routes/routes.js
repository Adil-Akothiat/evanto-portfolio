import React, { Suspense, useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";
// client & query
import client from "../components/pages/blogs/controller/client";
import QUERY from "../components/pages/blogs/controller/query";

import Navigation from "../components/navigation/navigation";
import Loader from "../components/loader/loader";

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
            <Routes>
                <Route path="/" element={(
                    <Suspense fallBack={<Loader />}>
                        <Home />
                    </Suspense>
                )}/>
                <Route path="/about" element={(
                    <Suspense fallBack={<Loader />}>
                        <About />
                    </Suspense>
                )}/>
                <Route path="/resume" element={(
                    <Suspense fallBack={<Loader />}>
                        <Resume />
                    </Suspense>
                )}/>
                <Route path="/portfolio" element={(
                    <Suspense fallBack={<Loader />}>
                        <Portfolio />
                    </Suspense>
                )}/>
                <Route path="/blogs" element={(
                    <Suspense fallBack={<Loader />}>
                        <Blogs blogs={blogs}/>
                    </Suspense>
                )}/>
                <Route path="/contact" element={(
                    <Suspense fallBack={<Loader />}>
                        <Contact />
                    </Suspense>
                )}/>
                {
                    blogs?blogs.map((b, i)=> <Route 
                        key={"key-"+i}
                        path={`/blogs/${b.id}`}
                        element={(
                            <Suspense fallBack={<Loader />}>
                                <Blog 
                                    blog={b}
                                />
                            </Suspense>
                        )}
                    />)
                    :<Loader />
                }
            </Routes>
        </>
    );
}