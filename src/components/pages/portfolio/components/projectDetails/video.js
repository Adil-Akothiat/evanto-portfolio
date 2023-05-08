import React, { memo } from "react";

export default memo(function Video (props) {
    return (
        <div className="video-player">
            <video 
                controls
                className="rounded"
                width="100%"
                height="400"
            >
                <source 
                    src={require("../../../../../assets/portfolio/project1/video/"+props.src)} 
                    type="video/webm"
                />
            </video>
        </div>
    );
})