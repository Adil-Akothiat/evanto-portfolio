import React from "react";

export default function NavFooter () {
    return (
        <div className="copyright position-relative">
            <p className="fw-normal text-center">© {new Date().getFullYear()} Company_Name. All Rights Reserved.</p>
        </div>
    );
}