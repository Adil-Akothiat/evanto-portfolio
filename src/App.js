import React, {useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Resume from "./components/pages/resume/resume";
import Portfolio from "./components/pages/portfolio/portfolio";
import Blogs from "./components/pages/blogs/blogs";
import Loader from "./components/loader/loader";
import Blog from "./components/pages/blogs/components/blog/blog";


export default function App () {
  function focusHandler (target) {
    window.scrollTo(0, 0);
    document.querySelector(".focus").classList.remove("focus");
    target.classList.add("focus");
  }
  function expandHandler () {
    document.querySelector(".navigation").classList.toggle("expand-nav");
  }
  // decrease collapse button opacity
  function decrOpacity () {
    const collapse = document.querySelector(".my-collapse");
    if(window.scrollY>1) {
      collapse.style.opacity="0.5"
    }else {
      collapse.style.opacity="1";
    }
  }
  useEffect(()=> {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", ()=> {
      decrOpacity();
    })
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
  return (
    <>
      <Loader time={500}/>
      <Navigation focus={focusHandler} expand={expandHandler}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<h1>Contact Me!</h1>} />
        <Route path="/blogs/blog" element={<Blog openShareHandler={openShare} closeShareHandler={closeShare} open= {isOpenShare}/>}/>
        <Route path="*" element={<h1>Page Not Found 505!</h1>} />
      </Routes>
    </>
  );
}