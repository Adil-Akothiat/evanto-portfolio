import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Links (props) {
    return (
        <div className="p-3">
            <ul className="link-pages px-0 m-0 text-capitalize">
                <li>
                    <a className="focus" href={"#/"} onClick={props.focus} id="home">
                        <Unicons.UilEstate />
                        <span>home</span>
                    </a>
                </li>
                <li>
                    <a href={"#/about"} onClick={props.focus}>
                        <Unicons.UilUserCircle />
                        <span>about</span>
                    </a>
                </li>
                <li>
                    <a href={"#/resume"} onClick={props.focus}>
                        <Unicons.UilClipboardAlt />
                        <span>resume</span>
                    </a> 
                </li>
                <li>
                    <a href={"#/portfolio"} onClick={props.focus}>
                        <Unicons.UilBag />
                        <span>portfolio</span>
                    </a>
                </li>
                <li>
                    <a href={"#blog"} onClick={props.focus}>
                        <Unicons.UilDocumentLayoutLeft />
                        <span>blogs</span>
                    </a>
                </li>
                <li>
                    <a href={"#contact"} onClick={props.focus}>
                        <Unicons.UilAt />
                        <span>contact</span>
                    </a>
                </li>
                <li>
                    <a href={"#notifications"} onClick={props.focus}>
                        <Unicons.UilBell />
                        <span>notification</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}