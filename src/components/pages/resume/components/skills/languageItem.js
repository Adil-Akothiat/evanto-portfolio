import React, { useCallback, memo } from "react";

export default memo(function LanguageItem (props) {
    const setRate  = useCallback(function (r) {
        let array = [];
        for(let i = 0; i < r; i++) {
            array.push("point-focus");
        }
        if(array.length!==5) {
            for(let i = 0; i < 5-r; i++) {
                array.push("point-blur");
            }
        }
        return array;
    }, [])
    return (
        <div>
            <div>
                <h4 className="fw-normal mb-1">{props.language}</h4>
                <h6 className="fw-light">{props.description}</h6>
            </div>
            <div className="rate-language">
                {
                    setRate(props.rate).map((e, i)=> <span key={"rate-"+i} className={e}></span>)
                }
            </div>
        </div>
    );
})