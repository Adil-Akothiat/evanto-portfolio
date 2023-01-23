import React from "react";
import Filter from "./filter";
import WorkCard from "./workCard";

export default function MainWork (props) {
    return (
        <div className="main-size">
            <Filter />
            <div className="my-grid">
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
                <WorkCard 
                    src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"}
                    title="Project Title 1"
                    handleClick={props.openProject}
                    id="1"
                />
            </div>
        </div>
    );
}