import React, {useState, useEffect} from "react";
import Loader from "../../loader/loader";
import "../../../styles/pages/works.css";
import WorkDetails from "./components/workDetails/workDetails";
import MainWork from "./components/mainProject/mainWork";
import workData from "../../../data/works.json";

export default function Works () {
    const [works, setWorks]=  useState([]);
    const [categories, setCategories] = useState([]);
    const [details, setDetails] = useState({status: false});
    function openProject ({target}) {
        // display none of the navigation 
        window.scrollTo(0, 0)
        if(window.innerWidth<850) {
            document.querySelector(".navigation").style.display="none";
        }
        const detailsStatus = {
            id: target.dataset.id,
            status: true,
        }
        setDetails(detailsStatus);
    }
    function closeProject () {
        // display none of the navigation 
        if(window.innerWidth<850) {
            document.querySelector(".navigation").style.display="block";
        }
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
        setWorks(generateDataWithId(workData));
    }, [])
    // get categories
    useEffect(()=> {
        const categoriesSet = new Set([]);
        let array = ["all"];
        workData.forEach(e=> categoriesSet.add(e.info.details.category));
        categoriesSet.forEach(e=> array.push(e));
        setCategories(array);
    }, [])
    return (
        <div className="works fixed-right">
            <Loader time={500} />
            {
                details.status?works.filter(w=> w.id===details.id).map((e, i)=> (
                    <WorkDetails 
                        key={"key-"+i}
                        handleClick={closeProject}
                        images={e.info}
                        title={e.title}
                        description={e.info.description}
                        details={e.info.details}
                    />
               )):null
            }
            {details.status?null:<MainWork works={works} openProject={openProject} categories={categories}/>}
        </div>
    );
}