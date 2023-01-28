import React from "react";

export default function Filter () {
    const categories = ["all", "branding", "photography", "fashion"];
    function focus ({target}) {
        for(let btn of [...document.querySelector(".categories").children]) btn.classList.remove("btn-focus");
        target.classList.add("btn-focus");
    }
    return (
        <div className="filter">
            <div className="m-title mb-5">
                <h2 className="fw-normal">my portfolio</h2>
            </div>
            <div className="d-flex align-items-center categories">
                {
                    categories.map((c, i)=> (
                        <button 
                            onClick={focus}
                            key={"key-"+i}
                            className={i===0?"text-capitalize btn-focus":"text-capitalize"}
                        >{c}</button>
                    ))
                }
            </div>
        </div>
    );
}