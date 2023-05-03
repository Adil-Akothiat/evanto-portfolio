import React, { Suspense } from "react";
import "../../../styles/pages/about.css";
import Loader from "../../loader/loader";

const Clients = React.lazy(()=> import("./components/client/clients"));
const Pricing = React.lazy(()=> import("./components/pricing/pricing"));
const Services = React.lazy(()=> import("./components/services/services"));
const KnowMeMore = React.lazy(()=> import("./components/knowMeMore/knowMeMore"));

export default function About () {
    return (
        <div className="about fixed-right main-scroll">
            <div className="main-size">
                <Suspense>
                <KnowMeMore fallBack={<Loader />}/>
                    <Services />
                    <Pricing />
                    <Clients />
                </Suspense>
            </div>
        </div>
    );
} 