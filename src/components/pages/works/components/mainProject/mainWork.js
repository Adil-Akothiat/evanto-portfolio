import React from "react";
import Filter from "./filter";
import WorkCard from "./workCard";

export default function MainWork (props) {
    return (
        <div className="main-size">
            <Filter />
            <div className="my-grid">
                {
                    props.works.map((w, i)=> {
                        return (
                            <WorkCard 
                                key={"key-"+i}
                                title={w.title}
                                src={w.image}
                                handleClick={props.openProject}
                                id={w.id}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}