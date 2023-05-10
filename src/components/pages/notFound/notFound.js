import React from "react";
import "./styles.css";

export default function NotFound () {
    return (
        <div className="not-found fixed-right">
            <div className="main-size">
                <h1>404</h1>
                <div className="msg">
                    <strong>Ooops! You weren't</strong>
                    <strong>supposed to see this</strong>
                </div>
                <div className="alert alert-info">
                    We couldn't find the page you were looking for.
                </div>
            </div>
        </div>
    );
}