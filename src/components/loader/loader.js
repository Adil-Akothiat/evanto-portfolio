import React, { useEffect } from "react";
import "./loader.css";

export default function Loader () {
    useEffect(()=> {
        if(window.localStorage.getItem("themeColor")) {
            [...document.querySelector(".snip-blocks").children].forEach(b=> b.style.backgroundColor=window.localStorage.getItem("themeColor"))
        }
    }, [])
    return (
        <div className="snip-loader">
            <div className="snip-blocks">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}