import React from "react";

export default function Alert ({ alertStatus }) {
    return (
        <div className={alertStatus?"alert alert-success":"alert alert-danger"}>
            Thanks for contacting!
        </div>
    )
}