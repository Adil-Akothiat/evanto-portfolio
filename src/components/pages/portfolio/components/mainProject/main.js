import React, { useState, memo } from "react";
import Filter from "./filter";
import ProjectCard from "./projectCard";

export default memo(function Main (props) {
    const [categ, setCateg] = useState("all");
    function handleCategories (categ) {
        setCateg(categ);
    }
    return (
        <div className="main-size pb-2">
            <Filter works={props.works} categories={props.categories} setCategories={handleCategories}/>
            {
                props.works.length?(
                    <div className="my-grid mb-5">
                    {
                        props.works.map((w, i)=> {
                            return (
                                <ProjectCard 
                                    key={"key-"+i}
                                    class=
                                    {
                                        categ==="all"?"":
                                        w.info.details.category===categ?"":"hide-project"
                                    }
                                    title={w.title}
                                    src={`project${i+1}/${w.image}`}
                                    handleClick={props.openProject}
                                    id={w.id}
                                />
                            );
                        })
                    }
                </div>
                ):<div className="alert alert-warning">You don't have any project create some project in directory <strong>/src/components/pages/portfolio/admin/projects.json</strong></div>
            }
        </div>
    );
})