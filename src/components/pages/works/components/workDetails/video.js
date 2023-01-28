import React from "react";

export default function Video (props) {
    function getUrl() {
        let newUrl;
        if(props.src.split("").includes("=")) {
            let arr = props.src.split("="), url = arr[arr.length-1];
            newUrl = url;
        }else {
            let arr = props.src.split("/"), url= arr[arr.length-1];
            newUrl = url;
        }
        return newUrl;
    }
    return (
        <div>
        <iframe
            style={{width:"100%"}}
            className="rounded"
            height="400"
            src={`https://www.youtube.com/embed/${getUrl()}`}
            title="Youtube Player"
            frameBorder="0"
            allowFullScreen
        />
        </div>
    );
}