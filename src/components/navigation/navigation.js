import React, {useState} from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../styles/navigation/nav.css";
import Recent from "./components/recent";

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
                </div>
                <div className="p-3">
                    <ul className="link-pages px-0 m-0">
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
                            <a href={"#/portfolio"} onClick={focus}>
                                <Unicons.UilBag />
                                <span>portfolio</span>
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
                <Recent 
                    mainTitle="recent posts"
                    posts={[
                        {
                            title:"Creativity Is More Than",
                            link:"#post"
                        },
                        {
                            title:"Designing The Perfect",
                            link:"#post"
                        },
                        {
                            title:"By Spite About Do Of Allow",
                            link:"#post"
                        }
                    ]}
                />
                <Recent 
                    mainTitle="categories"
                    posts={
                        [
                            {
                                title:"design",
                                link:"#post"
                            },
                            {
                                title:"frontend",
                                link:"#post"
                            }, 
                            {
                                title:"backend",
                                link:"#post"
                            },
                            {
                                title:"problem solving",
                                link:"#post"
                            }
                        ]
                    }
                />
                <Recent 
                    mainTitle="join us"
                    posts={[
                        {
                            title:"log in",
                            link:"#login"
                        },
                        {
                            title:"sign in",
                            link:"#signin"
                        }, 
                    ]}
                />
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