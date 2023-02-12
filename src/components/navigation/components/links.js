import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";

export default function Links () {
    return (
        <div className="p-3">
            <ul className="link-pages px-0 m-0 text-capitalize">
                <li>
                    <NavLink
                        tag={Link}
                        to="/"
                    >
                        <Unicons.UilEstate />
                        <span>home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        tag={Link}
                        to="/about"
                    >
                        <Unicons.UilUserCircle />
                        <span>about</span>
                    </NavLink>
                </li>
                <li> 
                    <NavLink
                        tag={Link}
                        to="/resume"
                    >
                        <Unicons.UilClipboardAlt />
                        <span>resume</span>
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        tag={Link}
                        to="/portfolio"
                    >
                        <Unicons.UilBag />
                        <span>portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        tag={Link}
                        to="/blogs"
                    >
                        <Unicons.UilDocumentLayoutLeft />
                        <span>blogs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        tag={Link}
                        to="/contact"
                    >
                        <Unicons.UilAt />
                        <span>contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}