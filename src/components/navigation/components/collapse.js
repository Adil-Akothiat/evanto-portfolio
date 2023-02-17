import React from "react";

import { AiOutlineMenu, } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Collapse (props) {
    return (
        <button 
            id="collapse"
            className="my-collapse"
            aria-label="menu button"
            onClick={props.collapse}
            >
            {
                props.open?<IoMdClose />:<AiOutlineMenu />
            }
        </button>
    );
}