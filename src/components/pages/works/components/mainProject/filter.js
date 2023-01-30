import React from "react";

export default function Filter (props) {
    function focus ({target}) {
        for(let btn of [...document.querySelector(".categories").children]) btn.classList.remove("btn-focus");
        target.classList.add("btn-focus");
        props.setCategories(target.textContent);
    }
    return (
        <div className="filter">
            <div className="m-title mb-5">
                <h2 className="fw-normal">my portfolio</h2>
            </div>
            <div className="d-flex flex-wrap align-items-center categories">
                {
                    props.categories.map((c, i)=> (
                        <button 
                            onClick={focus}
                            key={"key-"+i}
                            className={i===0?"text-capitalize btn-focus mb-2":"text-capitalize mb-2"}
                        >{c}</button>
                    ))
                }
            </div>
        </div>
    );
}