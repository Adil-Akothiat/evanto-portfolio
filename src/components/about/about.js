import React, {useEffect} from "react";
import Skills from "./skills";
import "../../styles/about/about.css";
import Experience from "./experience";
import WhatIDo from "./whatIdo";
import Education from "./education";
const skills = [{name:"HTML", rate: 90}, {name:"CSS", rate:85}, {name:"JAVASCRIPT", rate:70}, {name:"REACT/JS", rate: 65}];

export default function About () {
    useEffect(()=> {
        const lists = document.querySelectorAll("li");
        lists.forEach(li=> {
            if(li.dataset.page==="about") {
                li.classList.add("focus");
                document.querySelectorAll(".rate").forEach((r,i)=> {
                    r.style.width=`${skills[i].rate}%`;
                })
            }else {
                li.classList.remove("focus");
            }
        })
    }, [])
    return (
        <main className="about">
            <Skills />
            <div className="fl">
                <Experience />
                <Education />
            </div>
            <WhatIDo />
        </main>
    );
}