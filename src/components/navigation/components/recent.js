import React from "react";

export default function Recent (props) {
    return (
        <div className="recent p-3">
            <div>
                <h3 className="mb-3">{props.mainTitle}</h3>
                <ul className="p-0">
                    {
                        props.posts.map((p, i)=> <li className="mb-1" key={"link-"+i}><a href={p.link}>{p.title}</a></li>)
                    }
                </ul>
            </div>
        </div>
    );
}