import React, {useState, useEffect} from "react";
import "../../../styles/pages/portfolio.css";

import Loader from "../../loader/loader";
import ProjectDetails from "./components/projectDetails/projectDetails";
import Main from "./components/mainProject/main";


// import portfolioData from "../../../data/portfolio.json";
import projectsData from "./admin/json/projects.json";

export default function Portfolio () {
    const [projects, setProjects]=  useState([]);
    const [categories, setCategories] = useState([]);
    const [details, setDetails] = useState({status: false});

    function openProject ({target}) {
        const detailsStatus = {
            id: target.dataset.id,
            status: true,
        }
        setDetails(detailsStatus);
    }
    function closeProject () {
        setDetails({status: false});
    }
    function generateDataWithId (dataParams, array=[]) {
        array=[];
        for(let i = 0; i <dataParams.length; i++) {
            let id = "__id__"+i, data = {};
            for(let k in dataParams[i]) {
                data.id=id;
                data[k]=dataParams[i][k];
            }
            array.push(data);
        }
        return array;
    }
    useEffect(()=> {
        setProjects(generateDataWithId(projectsData));
        const categoriesSet = new Set([]);
        let array = ["all"];
        projectsData.forEach(e=> categoriesSet.add(e.info.details.category));
        categoriesSet.forEach(e=> array.push(e));
        setCategories(array);
    }, [])
    return (
        <div className="portfolio fixed-right">
            <Loader time={500} />
            {
                details.status?projects.filter(project=> project.id===details.id).map((e, i)=> (
                    <ProjectDetails 
                        key={"key-"+i}
                        handleClick={closeProject}
                        images={e.info}
                        title={e.title}
                        description={e.info.description}
                        details={e.info.details}
                    />
               )):null
            }
            {details.status?null:<Main works={projects} openProject={openProject} categories={categories}/>}
        </div>
    );
}