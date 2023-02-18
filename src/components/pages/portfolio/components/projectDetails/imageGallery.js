import React from "react";

// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function ImageGallery (props) {
    function prev () {
        const current = document.querySelector(".show");
        const contentGall = document.getElementById("content-gallery");
        if(current.previousElementSibling) {
            current.classList.remove("show");
            current.previousElementSibling.classList.add("show");
        }else {
            current.classList.remove("show");
            contentGall.children[contentGall.children.length-1].classList.add("show");
        }
    }
    function next() {
        const current = document.querySelector(".show");
        const contentGall = document.getElementById("content-gallery");
        if(current.nextElementSibling) {
            current.classList.remove("show");
            current.nextElementSibling.classList.add("show");
        }else {
            current.classList.remove("show");
            contentGall.children[0].classList.add("show");
        }
    }
    return (
        <div className="gallery position-relative mb-4"> 
            <button className="start-0" onClick={prev}><FaAngleLeft /></button>
            <div id="content-gallery">
            {
                props.details.images.map((img, i)=> (
                    <img 
                        key={"key-"+i}
                        className={i===0?"rounded position-absolute hide show img-fluid":"rounded hide"}
                        src={img}
                        alt={props.title}
                    />
                ))
            }
            </div>
            <button className="end-0" onClick={next}><FaAngleRight /></button>
        </div>
    );
}