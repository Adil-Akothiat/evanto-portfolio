import React, { useEffect } from "react";
import "./themes.css";
import { AiTwotoneSetting } from "react-icons/ai";

export default function Themes () {
    const themeColors = ["#037FFF","#6747C7", "#00ABE4", "#022C43","#E7473C","#C53678"];
    const openThemes = ({target})=> target.nextElementSibling.classList.toggle("open-themes");
    const setThemeColor = ({target})=> {
        document.documentElement.style.setProperty("--main-color", target.dataset.color);
        window.localStorage.setItem("themeColor", target.dataset.color);
    }
    useEffect(()=> {
        if(window.localStorage.getItem("themeColor")) {
            document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("themeColor"));
        }        
    }, [])
    return (
        <div className="themes">
            <div className="themes-content">
                <button aria-label="open theme" onClick={openThemes}>
                    <AiTwotoneSetting />
                </button>
                <div>
                    {
                        themeColors.map((color, i)=> (
                            <span 
                                key={"key-"+i}
                                data-color={color} 
                                style={{backgroundColor:color}}
                                onClick={setThemeColor}
                            ></span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}