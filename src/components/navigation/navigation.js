import React, { useState, useEffect, useCallback } from "react";
import "../../styles/navigation/nav.css";

import Links from "./components/links";
import NavHeader from "./components/navHeader";
import Collapse from "./components/collapse";

export default function Navigation () {
    const [open, setOpen] = useState(false);
    const expandHandler = useCallback(()=> document.querySelector(".navigation").classList.toggle("expand-nav"), []);
    const closeHandler = useCallback(()=> {
        document.querySelector(".navigation").classList.remove("expand-nav");
        window.scrollTo(0, 0);
    },[])
    const decreaseCollapseOpacity = useCallback(()=> {
        const collapse = document.getElementById("collapse");
        if(window.scrollY>1) {
          collapse.style.opacity="0.5"
        }else {
          collapse.style.opacity="1";
        }
    }, [])
    const collapseNav = useCallback(()=> {
        open?setOpen(false):setOpen(true);
        expandHandler();
    }, [expandHandler, open])
    useEffect(()=> {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", decreaseCollapseOpacity)
        return ()=> {
            window.removeEventListener("scroll", decreaseCollapseOpacity)
        }
    }, [decreaseCollapseOpacity])

    return (
        <div className="navigation">
            <Collapse 
                collapse={collapseNav}  
                open={open}  
            />
            <div className="content">
                <NavHeader close={closeHandler}/>
                <Links closeNav={closeHandler}/>
            </div>
        </div>
    );
}