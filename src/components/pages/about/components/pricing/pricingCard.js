import React from "react";

export default function PricingCard (props) {
    return (
        <div className={"pricing-card card "+props.type} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            {props.type==="ultimate"?<span className="text-capitalize">advanced</span>:null}
            <div className="card-header">
                <h5 className="text-center text-capitalize m-0 fw-normal">{props.type}</h5>
            </div>
            <div className="body-card">
                <div className="price-per-time text-center">
                    <span>0</span><span>/month</span>
                </div>
                <div className="package-props my-3">
                    <ul className="text-center">
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li className="unactive">Pharetra massa</li>
                        <li className="unactive">Massa ultricies mi</li>
                    </ul>
                </div>
            </div>
            <div className="footer-card">
                <button className="rounded text-capitalize">buy now</button>
            </div>
        </div>
    );
}