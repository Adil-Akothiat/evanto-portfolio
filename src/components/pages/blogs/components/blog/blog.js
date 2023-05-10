import React, { useState, memo, useCallback } from "react";
import { useParams } from "react-router-dom"; 
import BlogContent from "./blogContent";
import "../../../../../styles/pages/blog.css";
import Loader from "../../../../loader/loader";

export default memo(function Blog ({ blogs }) {
    // single Blog article
    const [isOpenShare, setIsOpenShare] = useState(false);
    const openShare = useCallback(function () {
        setIsOpenShare(true);
        // disable scroll
        window.document.body.style.overflow="hidden";
    }, [])
    const closeShare = useCallback(function () {
        setIsOpenShare(false);
        // enable scroll
        window.document.body.style.overflow="auto";
    }, [])
    const { id } = useParams();
    return (
        <div className="blog fixed-right">
            {
                blogs.length?<BlogContent 
                openShare={openShare}
                closeShare={closeShare}
                open={isOpenShare}
                blog={blogs.filter(b=> b.id===id)[0]}
            />:<Loader />
            }
        </div>
    );
})