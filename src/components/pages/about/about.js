import React, { Suspense, lazy } from "react";
import "../../../styles/pages/about.css";
import Loader from "../../loader/loader";
const Clients = lazy(()=> import("./components/client/clients"));
const Pricing = lazy(()=> import("./components/pricing/pricing"));
const Services = lazy(()=> import("./components/services/services"));
const KnowMeMore  = lazy(()=> import("./components/knowMeMore/knowMeMore"));

export default function About () {
    return (
        <div className="about fixed-right main-scroll">
            <div className="main-size">
                <Suspense fallback={<Loader />}>
                    <KnowMeMore />
                    <Services />
                    <Pricing />
                    <Clients />
                </Suspense>
            </div>
        </div>
    );
} 