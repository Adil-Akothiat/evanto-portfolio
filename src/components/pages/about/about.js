import React from "react";
import "../../../styles/pages/about.css";

import Loader from "../../loader/loader";
import Clients from "./components/client/clients";
import Pricing from "./components/pricing/pricing";
import Services from "./components/services/services";
import SelfPresentation from "./components/selfPresent/selfPresent";

// data
import aboutData from "../../../data/about.json";

export default function About () {
    
    return (
        <div className="about fixed-right main-scroll">
            <Loader time={500}/>
            <div className="main-size">
                <SelfPresentation about={aboutData.about}/>
                <Services />
                <Pricing />
                <Clients clients={aboutData.about.clients}/>
            </div>
        </div>
    );
} 