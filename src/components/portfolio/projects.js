import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Project from "../../user/projects.json";

export default function Projects () {
    return (
        <div className="projects">
            {
                Project.map((p,i)=> {
                    return (
                        <div key={"key-"+i} className={`${p.category} project`}>
                            <img src={p.image} alt={p.category}/>
                            <div className="project-info">
                                <h3>{p.name}</h3>
                                <div className="btns">
                                    <a href={p.source}>
                                        view source
                                        <Unicons.UilExternalLinkAlt />
                                    </a>
                                    <a href={p.live}>
                                        try it live
                                        <Unicons.UilExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}