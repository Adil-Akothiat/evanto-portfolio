import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Marquee from "react-fast-marquee";

export default function Certificat (props) {
    return (
        <div className="certificat p-2">
            <Marquee 
                gradient={false} 
                pauseOnHover={true}
                speed={80}
            >
                {
                    props.certificat.map((c, i)=> (
                        <div key={"key-"+i} className="card p-3 certification mx-1 position-relative overflow-hidden">
                            <div>
                                <span className="num-cert">{i+1}</span>
                                <div className="svg-certif mb-2">
                                    <Unicons.UilAward />
                                </div>
                                <div className="certif-data text-capitalize">
                                    <h4 className="fw-normal mb-2">{c.title}</h4>
                                    <h5 className="fw-normal text-uppercase">{c.company}</h5>
                                    <h6 className="fw-light my-2">{c.date}</h6>
                                    <h6 className="fw-light my-2">{c.id}</h6>
                                    <a role="button" className="btn btn-secondary" href={c.link}>show credential</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
}