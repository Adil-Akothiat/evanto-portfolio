import React from "react";

export default function Filter () {
    const divisions = ["all", "branding", "photography", "fashion"];
    return (
        <div className="filter">
            <div className="m-title">
                <h2>my portfolio</h2>
            </div>
            <div className="ds-fl mr-top-med">
                {
                    divisions.map((d, i)=> {
                        if(i===0) {
                            return (
                                <button key={"key-"+i} className="text-upper btn-secondary rounded-sm curs-p btn-focus">{d}</button>
                            );
                        }else {
                            return (
                                <button key={"key-"+i} className="text-upper btn-secondary rounded-sm curs-p">{d}</button>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}