import React, {useEffect, useState} from "react";
import "../../../styles/pages/about.css";

import Loader from "../../loader/loader";
import Clients from "./components/client/clients";
import Pricing from "./components/pricing/pricing";
import Services from "./components/services/services";
import aboutData from "../../../data/about.json";
import SelfPresentation from "./components/selfPresent/selfPresent";


export default function About (props) {
    const [view, setView] = useState("view more");
    useEffect(()=> {
        const clients = [...document.querySelector(".clients").children];
        clients.forEach((c, i)=> {
            if(i>1) c.classList.add("hide-client");
        });
    }, [props]);
    function viewMoreHandler ({target}) {
        if(target.textContent.toLowerCase() === "view more") {
            setView("view less");
            return [...document.querySelector(".clients").children].forEach((c)=> {
                c.classList.remove("hide-client");
            });
        }else {
            setView("view more");
            return [...document.querySelector(".clients").children].forEach((c,i)=> {
                if(i>1) c.classList.add("hide-client");
            })
        }
    };
    
    return (
        <div className="about fixed-right main-scroll">
            <Loader time={500}/>
            <div className="main-size">
                <SelfPresentation about={aboutData.about}/>
                <Services />
                <Pricing />
                <Clients view={view} viewMore={viewMoreHandler} clients={aboutData.about.clients}/>
            </div>
        </div>
    );
} 