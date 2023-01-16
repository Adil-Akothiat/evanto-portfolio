import React, {useState} from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../styles/navigation/nav.css";
import Recent from "./components/recent";

export default function Navigation (props) {
    const [open, isOpen] = useState(false);
    function focus ({target}) {
        props.focus(target);
        props.expand();
    }
    return (
        <div className="navigation">
            <div className="content">
                <div className="hero">
                    <a href={"#/"} onClick={focus}>
                        <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="adil khayt"/>
                    </a>
                </div>
                <div>
                    <ul className="link-pages">
                        <li>
                            <a className="focus" href={"#/"} onClick={focus} id="home">
                                <Unicons.UilEstate />
                                <span>home</span>
                            </a>
                        </li>
                        <li>
                            <a href={"#/about"} onClick={focus}>
                                <Unicons.UilUserCircle />
                                <span>about</span>
                            </a>
                        </li>
                        <li>
                            <a href={"#/resume"} onClick={focus}>
                                <Unicons.UilClipboardAlt />
                                <span>resume</span>
                            </a> 
                        </li>
                        <li>
                            <a href={"#/works"} onClick={focus}>
                                <Unicons.UilCheckSquare />
                                <span>works</span>
                            </a>
                        </li>
                        <li>
                            <a href={"#/blog"} onClick={focus}>
                                <Unicons.UilDocumentLayoutLeft />
                                <span>blog</span>
                            </a>
                        </li>
                        <li>
                            <a href={"#/contact"} onClick={focus}>
                                <Unicons.UilAt />
                                <span>contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Recent />
                <Recent />
                <Recent />
            </div>
            <button 
                className="collapse" 
                role="menubar"
                onClick={()=> {
                    open?isOpen(false):isOpen(true);
                    props.expand();
                }}
                >
                {
                    open?<Unicons.UilMultiply />:<Unicons.UilBars />
                }
            </button>
        </div>
    );
}