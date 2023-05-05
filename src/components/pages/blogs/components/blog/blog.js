import React, { Suspense, useState, lazy, memo, useCallback } from "react";
import Loader from "../../../../loader/loader";
const BlogContent = lazy(()=> import("./blogContent"));

export default memo(function Blog (props) {
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
    return (
        <div className="blog fixed-right">
            <Suspense fallback={<Loader />}>
                <BlogContent 
                    openShare={openShare}
                    closeShare={closeShare}
                    open={isOpenShare}
                    blog={props.blog}
                />
            </Suspense>
        </div>
    );
})