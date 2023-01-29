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
    function getPlayer () {
        let player;
        if(props.src.split(".").includes("https://vimeo")) {
            player = "https://player.vimeo.com/video";
        }else {
            player = "https://www.youtube.com/embed"
        }
        return player;
    }
    return (
        <div className="video-player">
            <iframe
                style={{width:"100%"}}
                className="rounded"
                height="400"
                src={`${getPlayer()}/${getUrl()}`}
                title="Youtube Player"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}