import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Nav from "./components/navigation/nav";
import Portfolio from "./components/portfolio/portfolio";
import "./styles/styles.css";

export default function App () {
  useEffect(()=> {
    window.onmousemove = e=> {
      const {clientX, clientY} = e;
      document.querySelector(".pointer").style.transform=`translate(${clientX-15}px, ${clientY-15}px)`;
    }
  }, [])
  return (
    <>
      <div className="pointer"></div>
      <Nav/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About />}/>
        <Route path={"/portfolio"} element={<Portfolio />}/>
        <Route path={"/contact"} element={<Contact />}/>
      </Routes>
    </>
  );
}