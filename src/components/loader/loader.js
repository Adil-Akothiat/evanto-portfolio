import React, {useState, useEffect} from "react";
import {Blocks} from "react-loader-spinner";

export default function Loader () {
    const [width, setWidth] = useState(100);
    useEffect(()=> {
        setTimeout(()=> {
            setWidth(0);
        }, 500);
    }, [])
    return (
        <div style={{position:"absolute",left:"0",top:"0",height:width+"%",width:width+"%",backgroundColor:"white", zIndex:"10"}}>
            <Blocks
                visible={true}
                height={width}
                width={width}
                ariaLabel="blocks-loading"
                wrapperStyle={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)", zIndex:"20"}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
}