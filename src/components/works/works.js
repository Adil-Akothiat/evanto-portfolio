import React, {useState} from "react";
import Loader from "../loader/loader";
import "../../styles/pages/works.css";
import WorkDetails from "./components/workDetails";
import MainWork from "./components/mainWork";

export default function Works () {
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
    return (
        <div className="works fixed-right container">
            <Loader time={500} />
            {
                details.status?<WorkDetails 
                handleClick={closeProject}
                src={"https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"} 
                title={"Project Title 1"} 
                info={"Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}/>:null
            }
            {details.status?null:<MainWork openProject={openProject}/>}
        </div>
    );
}