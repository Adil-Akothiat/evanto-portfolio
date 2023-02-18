import React from "react";

export default function PricingCard (props) {
    return (
        <div className={"pricing-card card "+props.package.package}>
            {props.package.package==="ultimate"?<span className="text-capitalize">{props.package.package}</span>:null}
            <div className="card-header">
                <h5 className="text-center text-capitalize m-0 fw-normal">{props.package.package}</h5>
            </div>
            <div className="body-card">
                <div className="price-per-time text-center">
                    <span>{props.package.price}</span><span>/{props.package.perTime}</span>
                </div>
                <div className="package-props my-3">
                    <ul className="text-center">
                        {
                            props.package.features.map((f, i)=> <li className={f.available?"":"unactive"} key={"key-"+i}>{f.feature}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="footer-card">
                <button className="rounded text-capitalize">buy now</button>
            </div>
        </div>
    );
}