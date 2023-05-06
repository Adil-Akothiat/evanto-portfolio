import React from "react";
import { Link } from "react-router-dom";

export default function NavHeader (props) {
    return (
        <div className="p-3 hero mx-auto">
            <Link
                onClick={props.close}
                to="/"
            >
                <img 
                    src={require("../../../assets/avatar/profile.jpg")} 
                    alt="adil khayt"
                    loading="lazy"
                />
            </Link>
            <h5 className="text-capitalize fw-normal text-center mt-3">adil khayt</h5>
            <h6 className="text-capitalize text-center fw-normal text-main">tangir, morocco</h6>
        </div>
    );
}