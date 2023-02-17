import React, {useState, useEffect} from "react";

import "../../styles/navigation/nav.css";

import Links from "./components/links";
import NavHeader from "./components/navHeader";
import NavFooter from "./components/navFooter";
import Collapse from "./components/collapse";

export default function Navigation () {
    const [open, setOpen] = useState(false);

    const expandHandler = ()=> document.querySelector(".navigation").classList.toggle("expand-nav");
    const closeHandler = ()=> {
        document.querySelector(".navigation").classList.remove("expand-nav");
        window.scrollTo(0, 0);
    }
    const decreaseCollapseOpacity = ()=> {
        const collapse = document.getElementById("collapse");
        if(window.scrollY>1) {
          collapse.style.opacity="0.5"
        }else {
          collapse.style.opacity="1";
        }
    }
    const collapseNav = ()=> {
        open?setOpen(false):setOpen(true);
        expandHandler();
    }

    useEffect(()=> {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", decreaseCollapseOpacity)
        return ()=> {
            window.removeEventListener("scroll", decreaseCollapseOpacity)
        }
    }, [])

    return (
        <div className="navigation">
            <Collapse 
                collapse={collapseNav}  
                open={open}  
            />
            <div className="content">
                <NavHeader close={closeHandler}/>
                <Links close={closeHandler}/>
                <NavFooter />
            </div>
        </div>
    );
}