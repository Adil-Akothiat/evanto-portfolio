import React, { 
    memo, 
    Suspense, 
    lazy
} from "react";
import { Route, Routes} from "react-router-dom";
// client & query
import Loader from "../components/loader/loader";
import Navigation from "../components/navigation/navigation";

const Home = lazy(()=> import("../components/pages/home/home"));
const About = lazy(()=> import("../components/pages/about/about"));
const Blogs = lazy(()=> import("../components/pages/blogs/blogs"));
const Blog = lazy(()=> import("../components/pages/blog/blog"));
const Contact = lazy(()=> import("../components/pages/contact/contact"));
const Portfolio = lazy(()=> import("../components/pages/portfolio/portfolio"));
const Resume  = lazy(()=> import("../components/pages/resume/resume"));
const NotFound = lazy(()=> import("../components/pages/notFound/notFound"));

export default memo(function MyRoutes ({ blogs }) {
    return (
        <>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/resume" element={<Resume />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/blogs" element={<Blogs blogs={blogs}/>} />
                    <Route path={`/blogs/:id`} element={<Blog blogs={blogs} />} />
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Suspense>
        </>
    );
})