import React from "react";

export default function Alert(props) {
    return (
        <div className={`alert ${props.status?"alert-success":"alert-danger"} py-2 text-capitalize mt-3`} role="alert">
            {props.message}
        </div>
    );
}