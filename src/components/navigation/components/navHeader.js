import React from "react";
import { Link } from "react-router-dom";

export default function NavHeader (props) {
    return (
        <div className="p-3 hero mx-auto">
            <Link 
                onClick={props.close}
                to="/"
            >
                <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="adil khayt"/>
            </Link>
            <h5 className="text-capitalize fw-normal text-center mt-3">adil khayt</h5>
            <h6 className="text-capitalize text-center fw-normal text-main">tangir, morocco</h6>
        </div>
    );
}