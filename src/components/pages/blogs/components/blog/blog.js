import React, {Suspense, useState} from "react";
import Loader from "../../../../loader/loader";

const BlogContent = React.lazy(()=> import("./blogContent"));

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
}