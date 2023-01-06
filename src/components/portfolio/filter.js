import React from "react";

export default function Filter () {
    const filters = ["all", "programming", "development", "design"];
    return (
        <div className="filter">
            <div className="filters">
                {
                    filters.map((f, i)=> i===0?<button className="focus" key={"key-"+i}>{f}</button>:<button key={"key-"+i}>{f}</button>)
                }
            </div>
        </div>
    );
}