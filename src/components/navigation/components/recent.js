import React from "react";

export default function Recent (props) {
    return (
        <div className="recent">
            <div>
                <h3>{props.mainTitle}</h3>
                <ul>
                    {
                        props.posts.map((p, i)=> <li key={"link-"+i}><a href={p.link}>{p.title}</a></li>)
                    }
                </ul>
            </div>
        </div>
    );
}