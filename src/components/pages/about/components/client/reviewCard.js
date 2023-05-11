import React, { useCallback, memo } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default memo(function ReviewCard (props) {
    const stars = useCallback(()=> {
        let num = props.stars>=5?5:props.stars;
        let stars = [];
        for(let i = 0; i < num; i++) stars.push("star");
        for(let i = stars.length; i < 5; i++) stars.push("no-star");
        return stars;
    },[props.stars]);
    return (
        <div className="review-card card text-center">
            <div className="card-header">
                <img 
                    src={require("../../../../../assets/about/clients/"+props.image)} 
                    alt={props.name} 
                    className="img-thumbnail rounded-circle"
                    width="100"
                    height="100"
                    loading="lazy"
                />
                <div className="mt-3">
                    <h5 className="text-capitalize fw-normal">{props.name}</h5>
                    <h6 className="text-capitalize fw-light">designer</h6>
                </div>
                <div className="stars">
                    <ul className="d-flex flex-wrap justify-content-center">
                        {
                            stars().map((s, i)=> <li className={s} key={"key-"+i}>{
                                s==="star"?<AiFillStar />:<AiOutlineStar />
                            }</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="body-card">
                <div>
                    <p className="fw-light">{props.review}</p>
                </div>
                <div>
                    <a 
                        href={props.link} 
                        role="button" 
                        className="my-own-btn-link text-capitalize rounded mx-auto"
                        aria-label="watch review"    
                    >
                        watch review
                    </a>
                </div>
            </div>
        </div>
    );
})