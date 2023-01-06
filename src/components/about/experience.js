import React, {useEffect} from "react";
import Experiences  from "../../user/experience.json";

export default function Experience () {
    useEffect(()=> {
        const cards = [...document.querySelector(".cards").children];
        let about = document.querySelector(".about");
        about.onscroll = ()=> {
            let scroll = about.scrollTop;
            for(let exp of document.querySelectorAll(".exp")) {
                let {top} = exp.getBoundingClientRect();
                if(scroll>top) {
                    exp.classList.add("show");
                }
            }
            for(let card of cards) {
                const {top} = card.getBoundingClientRect();
                if(scroll>top) {
                    card.classList.add("show");
                }
            }
        }
    }, [])
    return (
        <div className="experience">
            <h3>Experience</h3>
            <div>
            {
                Experiences.map((exp, i)=> (<div className="exp" key={"experience-"+i}>
                    <span>{exp.date}</span>
                    <h4>{exp.job}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.description}</p>
                </div>))
            }
            </div>
        </div>
    );
}