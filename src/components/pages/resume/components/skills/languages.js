import React from "react";

import languages from "../../admin/json/languages.json";

const Language = (props)=> {
    function setRate (r) {
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
    }
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
}


export default function Languages () {
    return (
        <>
            {
                languages.map((l, i)=> (
                    <Language 
                        key={"key-"+i}
                        language={l.language}
                        rate={l.rate}
                        description={l.description}
                    />
                ))
            }
        </>
    );
}