import React, {useEffect} from "react";
import "../../styles/portfolio/portfolio.css";
import Projects from "./projects";
import Filter from "./filter";

export default function Portfolio () {
    useEffect(()=> {
        const lists = document.querySelectorAll("li");
        lists.forEach(li=> {
            if(li.dataset.page==="portfolio") {
                li.classList.add("focus")
            }else {
                li.classList.remove("focus")
            }
        })
    }, [])
    // loaded
    useEffect(()=> {
        const filters = [...document.querySelector('.filters').children];
        const projects = [...document.getElementsByClassName("project")];
        filters.forEach(f=> f.addEventListener("click", function () {
            for(let f of filters) f.classList.remove("focus");
            this.classList.add("focus");
            if(this.textContent.toLowerCase()!=="all") {
                projects.forEach(p=> p.classList.add("hide"));
                [...document.querySelectorAll(`.${this.textContent.toLowerCase()}`)].forEach(e=> e.classList.remove("hide"));
            }else {
                projects.forEach(p=> p.classList.remove("hide"));
            }
        }))
    },[])
    return (
        <main className="portfolio">
            <Filter />
            <Projects />
        </main>
    );
}