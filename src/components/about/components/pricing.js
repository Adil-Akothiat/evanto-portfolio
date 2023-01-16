import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Pricing () {
    return (
        <div className="pd-4">
            <div className="head-page">
                <h2>Pricing</h2>
            </div>
            <div className="body-page cards pricing">
                <div>
                    <div>
                        <Unicons.UilTelegramAlt />
                        <h3>basic</h3>
                        <h4><strong>15 </strong>$/mo</h4>
                    </div>
                    <div>
                        <ul>
                            <li>Page <strong>4</strong></li>
                            <li>theme <strong>20</strong></li>
                            <li>starter files</li>
                            <li>revision <strong>2</strong></li>
                        </ul>
                    </div>
                    <div>
                        <a href={"#buy-basic"} role="button">
                            buy basic
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <Unicons.UilRocket />
                        <h3>pro</h3>
                        <h4><strong>25 </strong>$/mo</h4>
                    </div>
                    <div>
                        <ul>
                            <li>Page <strong>unlimited</strong></li>
                            <li>theme <strong>20</strong></li>
                            <li>starter files</li>
                            <li>revision <strong>unlimited</strong></li>
                        </ul>
                    </div>
                    <div>
                        <a href={"#buy-pro"} role="button">
                            buy pro
                        </a>
                    </div>
                </div>
            </div>    
        </div>
    );
}