import React from "react";
import { NavLink, Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { RiTodoLine, RiArticleLine } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function Links (props) {
    return (
        <div className="p-3">
            <ul className="link-pages px-0 m-0 text-capitalize">
                <li>
                    <NavLink
                        onClick={()=> props.closeNav()}
                        tag={Link}
                        to="/"
                    >
                        <AiOutlineHome />
                        <span>home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={()=> props.closeNav()}
                        tag={Link}
                        to="/about"
                    >
                        <BiUserPin />
                        <span>about</span>
                    </NavLink>
                </li>
                <li> 
                    <NavLink
                        onClick={()=> props.closeNav()}
                        tag={Link}
                        to="/resume"
                    >
                        <RiTodoLine />
                        <span>resume</span>
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        onClick={()=> props.closeNav()}
                        tag={Link}
                        to="/portfolio"
                    >
                        <IoBriefcaseOutline />
                        <span>portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={()=> props.closeNav()}
                        tag={Link}
                        to="/blogs"
                    >
                        <RiArticleLine />
                        <span>blogs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={()=> props.closeNav()}
                        tag={Link}
                        to="/contact"
                    >
                        <MdContactSupport />
                        <span>contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}