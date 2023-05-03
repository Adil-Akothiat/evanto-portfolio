import React from "react";

import knowMeMore from "../../admin/json/knowMeMore.json";

export default function KnowMeMore () {
    return (
        <div className="cv">
            <div className="m-title m-title-top mb-5">
                <h2 className="fw-normal text-main">about me</h2>
            </div>
            <div className="m-title">
                <h2>know me more</h2>
            </div>
            <div className="my-grid info align-items-center hero-img">
                <div>
                    <img 
                        className="img-fluid rounded w-100"
                        src={require("../../../../../assets/about/me.jpg")} 
                        alt="hero"
                    />
                </div>
                <div>
                    <div className="mb-4">
                        <p className="lh-base">
                            {knowMeMore.description}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-capitalize">personal information</h4>
                        {
                            knowMeMore.info.map((e, i)=> (
                                <div 
                                    key={"key-"+i}
                                    className="ds-fl my-2"
                                >
                                    <span className="text-capitalize fw-bold">{e.key} : </span><span className={e.key==="email"?"":"text-capitalize"}>{e.value}</span>
                                </div>
                            ))
                        }
                        <a href={"#CV"} role="button" className="text-uppercase">
                                download cv
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}