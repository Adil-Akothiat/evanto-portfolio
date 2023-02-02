import React, {useState, useEffect} from "react";
import About from "./components/pages/about/about";
import Home from "./components/pages/home/home";
import Loader from "./components/loader/loader";
import Navigation from "./components/navigation/navigation";
import Resume from "./components/pages/resume/resume";
import Portfolio from "./components/pages/portfolio/portfolio";

export default function App () {
  const [page, setPage] = useState("home");
  function focusHandler (target) {
    window.scrollTo(0, 0);
    document.querySelector(".focus").classList.remove("focus");
    if(target.hasAttribute("src")) {
      document.getElementById("home").classList.add("focus");
      setPage("home");
    }else {
      target.classList.add("focus");
      setPage(target.lastElementChild.textContent);
    }
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
  function scrollEffect (e, win) {
    let positionY;
    if(win) {
      positionY = window.scrollY;
    }else {
      positionY = e.currentTarget.scrollTop;
    }
    const scrollElements = [...document.querySelectorAll(".scroll")];
    scrollElements.forEach(element=> {
      const {top} = element.getBoundingClientRect();
      if((positionY)>= top) element.classList.remove("hi-sc-ef")
    })
  }
  useEffect(()=> {
    window.scrollTo(0, 0)
    window.onscroll = e=> {
      scrollEffect(e, true)
      decrOpacity();
    };
  });
  return (
    <>
      <Loader time={500}/>
      <Navigation focus={focusHandler} expand={expandHandler}/>
      {
        page==="home"?<Home/>:
        page==="about"?<About 
        handleScroll={scrollEffect}
        />:
        page==="resume"?<Resume 
        handleScroll={scrollEffect}
        />:<Portfolio />
      }
    </>
  );
}