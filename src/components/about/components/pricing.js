import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Pricing () {
    return (
        <div>
            <div className="m-title">
                <h2>Pricing</h2>
            </div>
            <div className="my-grid pricing">
                <div className="card">
                    <div>
                        <Unicons.UilTelegramAlt />
                        <h3 className="big-text text-cap fw-b">basic</h3>
                        <h4><strong className="big-xl-text">15 </strong>$/mo</h4>
                    </div>
                    <div className="text-cap">
                        <ul>
                            <li>Page <strong>4</strong></li>
                            <li>theme <strong>20</strong></li>
                            <li>starter files</li>
                            <li>revision <strong>2</strong></li>
                        </ul>
                    </div>
                    <div>
                        <a href={"#buy-basic"} role="button" className="btn-primary rounded-sm">
                            buy basic
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <Unicons.UilRocket />
                        <h3 className="big-text text-cap fw-b">pro</h3>
                        <h4><strong className="big-xl-text">25 </strong>$/mo</h4>
                    </div>
                    <div className="text-cap">
                        <ul>
                            <li>Page <strong>unlimited</strong></li>
                            <li>theme <strong>20</strong></li>
                            <li>starter files</li>
                            <li>revision <strong>unlimited</strong></li>
                        </ul>
                    </div>
                    <div>
                        <a href={"#buy-pro"} role="button" className="btn-primary rounded-sm">
                            buy pro
                        </a>
                    </div>
                </div>
            </div>    
        </div>
    );
}