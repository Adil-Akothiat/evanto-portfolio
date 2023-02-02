import React, {useState} from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../styles/navigation/nav.css";
import Links from "./components/links";
// import Recent from "./components/recent";

export default function Navigation (props) {
    const [open, setOpen] = useState(false);
    function focus ({target}) {
        props.focus(target);
        props.expand();
    }
    return (
        <div className="navigation">
            <div className="content">
                <div className="p-3 hero mx-auto">
                    <a href={"#/"} onClick={focus}>
                        <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="adil khayt"/>
                    </a>
                    <h5 className="text-capitalize fw-light text-center mt-3">adil khayt</h5>
                    <h6 className="text-capitalize text-center fw-light text-main">tangir, morocco</h6>
                </div>
                <Links focus={focus}/>
                <div>
                    <p className="fw-light text-center">© {new Date().getFullYear()} Company_Name. All Rights Reserved.</p>
                </div>
            </div>
            <button 
                className="my-collapse" 
                role="menubar"
                onClick={()=> {
                    open?setOpen(false):setOpen(true);
                    props.expand()
                }}
                >
                {
                    open?<Unicons.UilMultiply />:<Unicons.UilBars />
                }
            </button>
        </div>
    );
}