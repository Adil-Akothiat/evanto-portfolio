import React from "react";
import skills from "../../admin/skills.json";

export default function Skill () {
    return (
        <>
            <div className="skill">
                {
                    skills.map((s, i)=> (
                        <div key={"key-"+i} className="rate">
                            <h5 className="text-capitalize mt-2 fw-normal">{s.skill}</h5>
                            <div className="my-2">
                                <div style={{width: s.rate+"%"}}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}