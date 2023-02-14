import React, {useState} from "react";
import Filter from "./filter";
import ProjectCard from "./projectCard";

export default function Main (props) {
    const [categ, setCateg] = useState("all");
    function handleCategories (categ) {
        setCateg(categ);
    }
    return (
        <div className="main-size pb-2">
            <Filter works={props.works} categories={props.categories} setCategories={handleCategories}/>
            <div className="my-grid" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
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