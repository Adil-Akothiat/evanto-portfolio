import React from "react";

export default function SelfPresentation (props) {
    function getPersonalInfo () {
        let personal = [];
        for(let key in props.about.personalInfo) personal.push({key:key, value:props.about.personalInfo[key]});
        return personal;
    }
    return (
        <div className="cv">
            <div className="m-title m-title-top mb-5">
                <h2 className="fw-normal text-main">about me</h2>
            </div>
            <div className="my-grid info align-items-center hero-img">
                <div>
                    <img 
                        className="img-fluid rounded w-100"
                        src={"https://deterylightmode.netlify.app/static/media/Aboutus.90dda4cec7b8b59ed230.png"} 
                        alt="hero"
                    />
                </div>
                <div>
                    <div className="mb-4">
                        <p className="lh-base fw-light">
                            {props.about.description}
                        </p>
                    </div>
                    <div>
                        <h4 className="fw-normal text-capitalize">personal information</h4>
                        {
                            getPersonalInfo().map((e, i)=> (
                                <div 
                                    key={"key-"+i}
                                    className="ds-fl my-2"
                                >
                                    <span className="text-capitalize fw-normal">{e.key} : </span><span className={e.key==="email"?"fw-light":"text-capitalize fw-light"}>{e.value}</span>
                                </div>
                            ))
                        }
                        <a href={"#CV"} role="button" className="my-own-btn mt-3 text-uppercase rounded">
                                download cv
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}