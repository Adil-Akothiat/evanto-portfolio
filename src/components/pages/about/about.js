import React from "react";
import "../../../styles/pages/about.css";

import Clients from "./components/client/clients";
import Pricing from "./components/pricing/pricing";
import Services from "./components/services/services";
import KnowMeMore from "./components/knowMeMore/knowMeMore";

export default function About () {
    
    return (
        <div className="about fixed-right main-scroll">
            <div className="main-size">
                <KnowMeMore />
                <Services />
                <Pricing />
                <Clients />
            </div>
        </div>
    );
} 