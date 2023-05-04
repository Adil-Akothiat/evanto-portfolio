import React, { useCallback } from "react";

export default function Filter (props) {
    const focus  = useCallback(function ({target}) {
        [...document.querySelector(".categories").children].forEach(btn=> btn.classList.remove("btn-focus"));
        target.classList.add("btn-focus");
        props.setCategories(target.textContent);
    }, [props]);
    return (
        <div className="filter mb-5">
            <div className="m-title m-title-top mb-5">
                <h2 className="fw-normal text-main">my portfolio</h2>
            </div>
            <div className="d-flex align-items-center categories">
                {
                    props.categories.map((c, i)=> (
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