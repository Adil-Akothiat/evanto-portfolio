import React, { useCallback, memo } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default memo (function ImageGallery (props) {
    const prev = useCallback(() => {
        const current = document.querySelector(".show");
        const images = document.getElementById("content-gallery").children;
        if(current.previousElementSibling) {
            current.classList.remove("show");
            current.previousElementSibling.classList.add("show");
        }else {
            current.classList.remove("show");
            images[images.length-1].classList.add("show");
        }
    }, []);
    const next = useCallback(()=> {
        const current = document.querySelector(".show");
        const images = document.getElementById("content-gallery").children;
        if(current.nextElementSibling) {
            current.classList.remove("show");
            current.nextElementSibling.classList.add("show");
        }else {
            current.classList.remove("show");
            images[0].classList.add("show");
        }
    }, []);
    return (
        <div className="gallery position-relative mb-4"> 
            <button className="start-0" onClick={prev}><FaAngleLeft /></button>
            <div id="content-gallery">
            {
                props.details.images.map((img, i)=> (
                    <img 
                        key={"key-"+i}
                        className={i===0?"rounded show img-fluid":"rounded"}
                        src={require(`../../../../../assets/portfolio/project${props.index}/gallery/${img}`)}
                        alt={props.title}
                        loading="lazy"
                    />
                ))
            }
            </div>
            <button className="end-0" onClick={next}><FaAngleRight /></button>
        </div>
    );
})