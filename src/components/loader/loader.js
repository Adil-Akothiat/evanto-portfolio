import React, {useState, useEffect} from "react";
import {Blocks} from "react-loader-spinner";

export default function Loader (props) {
    const [width, setWidth] = useState(100);
    useEffect(()=> {
        setTimeout(()=> {
            setWidth(0);
        }, props.time);
    }, [props.time])
    return (
        <div style={{position:"absolute",left:"0",top:"0",height:width+"%",width:width+"%",backgroundColor:"white", zIndex:"100"}}>
            <Blocks
                visible={true}
                height={width}
                width={width}
                ariaLabel="blocks-loading"
                wrapperStyle={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)", zIndex:"10000"}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
}