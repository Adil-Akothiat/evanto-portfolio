import React from "react";
import PricingCard from "./pricingCard";

export default function Pricing () {
    return (
        <div>
            <div className="m-title">
                <h2>Pricing</h2>
            </div>
            <div className="mb-5 pricing-grid">
                <PricingCard type="free"/>
                <PricingCard type="standard"/>
                <PricingCard type="ultimate"/>
            </div>
        </div>
    );
}