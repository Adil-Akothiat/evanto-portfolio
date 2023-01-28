import React, {useEffect,useState} from "react";

export default function CircleProgressBar (props) {
    let value = props.value;
    if(value>100) value=100;
    const [rate, setRate] = useState(0);
    const [strokeArray, setStrokeArray] = useState(0);
    const [strokeOffset, setStrokeOffset] = useState(0);
    useEffect(()=> {
        const progress = document.querySelector(".progress");
        const r = progress.r.baseVal.value;
        const circumference = r * 2 * Math.PI;
        setStrokeArray(circumference);
        setStrokeOffset(circumference - (value / 100) * circumference);
        function incrementRate () {
            setRate(prevState=> prevState+1);
        }
        function decrementRate () {
            setRate(prevState=> prevState-1);
        }
        let count;
        if(rate<value) {
            count = setTimeout(()=>incrementRate() , 2)
        }else {
            count = setTimeout(()=> decrementRate(), 2)
        }
        if(rate===value) clearTimeout(count)
        if(rate===value) clearTimeout(count)
    }, [props.value, value, rate])
    return (
        <div className="progressbar-content">
            <div className="progressbar">
                <svg width="120" height="120">
                    <circle r="50" cx="60" cy="60" className="track"/>
                    <circle r="50" cx="60" cy="60" className="progress" style={{strokeDasharray:strokeArray, strokeDashoffset: strokeOffset}}/>
                </svg>
                <div className="progress-text">
                    <h6 className="fw-normal">{rate}%</h6>
                </div>
            </div>
            <h5 className="text-capitalize fw-light mt-2">{props.skill}</h5>
        </div>
    );
}