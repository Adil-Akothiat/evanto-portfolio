import React, {useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from "./components/navigation/navigation";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Resume from "./components/pages/resume/resume";
import Portfolio from "./components/pages/portfolio/portfolio";
import Blogs from "./components/pages/blogs/blogs";
// import Loader from "./components/loader/loader";
import Blog from "./components/pages/blogs/components/blog/blog";

// client and query
import client from "./components/pages/blogs/controller/client";
import QUERY from "./components/pages/blogs/controller/query";
import Contact from "./components/pages/contact/contact";


export default function App () {
  
  //setup scroll effect using AOS library
  useEffect(()=> {
    AOS.init();
  }, []);

  // single Blog article
  const [isOpenShare, setIsOpenShare] = useState(false);

  function openShare () {
    setIsOpenShare(true);
    // disable scroll
    window.document.body.style.overflow="hidden";
  }
  function closeShare () {
    setIsOpenShare(false);
    // enable scroll
    window.document.body.style.overflow="auto";
  }

  // get all Blogs
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
        <Route path="/blogs" element={<Blogs blogs={blogs}/>} />
        <Route path="/contact" element={<Contact />} />
        {
          blogs?blogs.map((b, i)=> <Route 
            key={"key-"+i}
            path={`/blogs/${b.id}`} 
            element={
              <Blog 
                openShareHandler={openShare} 
                closeShareHandler={closeShare} 
                open= {isOpenShare}  
                blog={b}
              />
            }
          />
          ):alert("data not found")
        }
        <Route path="*" element={<h1>Page Not Found 505!</h1>} />
      </Routes>
    </>
  );
}