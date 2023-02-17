import React from "react";
import PricingCard from "./pricingCard";

import pricingPackages from "../../admin/json/pricing.json";

export default function Pricing () {
    return (
        <div>
            <div className="m-title">
                <h2>Pricing</h2>
            </div>
            <div className="mb-5 pricing-grid">
                {
                    pricingPackages.map((pricingPackage, i)=> 
                        <PricingCard 
                            key={"key-"+i} 
                            package={pricingPackage}
                        />
                    )
                }
            </div>
        </div>
    );
}