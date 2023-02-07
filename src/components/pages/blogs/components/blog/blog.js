import React from "react";
export default function Blog (props) {
    return (
        <div className="blog">
            <div dangerouslySetInnerHTML={{"__html": props.blog.richText.html}}></div>
        </div>
    );
}