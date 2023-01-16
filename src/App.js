import React, {useState} from "react";
import About from "./components/about/about";
import Home from "./components/home/home";
import Loader from "./components/loader/loader";
import Navigation from "./components/navigation/navigation";
import Resume from "./components/resume/resume";

export default function App () {
  const [page, setPage] = useState("home");
  function setBorders () {
    document.querySelectorAll(".body-page").forEach(e=> {
        [...e.children].forEach((child, i)=> {
            if(!((i+1)%2===0)) child.classList.add("border-right");
        });
    });
  }
  function focusHandler (target) {
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
  return (
    <>
      <Loader time={500}/>
      <Navigation focus={focusHandler} expand={expandHandler}/>
      {
        page==="home"?<Home/>:
        page==="about"?<About setBorders={setBorders}/>:<Resume  setBorders={setBorders}/>
      }
    </>
  );
}