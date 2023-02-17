import React, {useState} from "react";
import BlogContent from "./blogContent";

export default function Blog (props) {
    // single Blog article
    const [isOpenShare, setIsOpenShare] = useState(false);

    function openShare () {
    setIsOpenShare(true);
    // disable scroll
    window.document.body.style.overflow="hidden";
    }
    function closeShare () {
    setIsOpenShare(false);
    // enable scroll
    window.document.body.style.overflow="auto";
    }

    return (
        <BlogContent 
            openShare={openShare}
            closeShare={closeShare}
            open={isOpenShare}
            blog={props.blog}
        />
    );
}