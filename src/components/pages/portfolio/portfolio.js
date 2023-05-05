import React, { 
    useState, 
    useEffect, 
    useCallback, 
    lazy, 
    Suspense,
    memo
} from "react";
import "../../../styles/pages/portfolio.css";
import projectsData from "./admin/projects.json";
import Loader from "../../loader/loader";
const ProjectDetails = lazy(()=> import("./components/projectDetails/projectDetails"));
const Main = lazy(()=> import("./components/mainProject/main"));

export default memo(function Portfolio () {
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
    const closeProject = useCallback(function () {
        setDetails({status: false});
    }, []);
    const generateDataWithId  = useCallback(function (dataParams, array=[]) {
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
    }, [])
    useEffect(()=> {
        setProjects(generateDataWithId(projectsData));
        const categoriesSet = new Set([]);
        let array = ["all"];
        projectsData.forEach(e=> categoriesSet.add(e.info.details.category));
        categoriesSet.forEach(e=> array.push(e));
        setCategories(array);
    }, [generateDataWithId])
    return (
        <div className="portfolio fixed-right">
            <Suspense fallback={<Loader />}>
                {
                    details.status?projects.filter(project=> project.id===details.id).map((e, i)=> (
                        <ProjectDetails 
                            key={"key-"+i}
                            handleClick={closeProject}
                            images={e.info}
                            title={e.title}
                            description={e.info.description}
                            details={e.info.details}
                            projectIndex={e.index}
                        />
                    )):null
                }
                {details.status?null:<Main works={projects} openProject={openProject} categories={categories}/>}
            </Suspense>
        </div>
    );
})