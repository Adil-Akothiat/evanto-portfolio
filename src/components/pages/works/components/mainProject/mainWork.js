import React, {useState} from "react";
import Filter from "./filter";
import WorkCard from "./workCard";

export default function MainWork (props) {
    const [categ, setCateg] = useState("all");
    function handleCategories (categ) {
        setCateg(categ);
    }
    return (
        <div className="main-size">
            <Filter works={props.works} categories={props.categories} setCategories={handleCategories}/>
            <div className="my-grid">
                {
                    props.works.map((w, i)=> {
                        return (
                            <WorkCard 
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