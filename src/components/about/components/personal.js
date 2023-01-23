import React from "react";

export default function Personal (props) {
    function getPersonalInfo () {
        let personal = [];
        for(let key in props.personal) personal.push({key:key, value:props.personal[key]});
        return personal;
    }
    return (
        <div>
            <div className="m-title">
                <h2>about me</h2>
            </div>
            <div className="my-grid info">
                <div>
                    <img src={"https://deterylightmode.netlify.app/static/media/Aboutus.90dda4cec7b8b59ed230.png"} alt="hero"/>
                </div>
                <div>
                    <div>
                        <p>
                            {props.personal.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-cap big-text">personal info</h3>
                        {
                            getPersonalInfo().filter(e=> e.key!=="description").map((e, i)=> {
                                if(e.key!=="email") {
                                    return (
                                        <div key={"key-"+i} className="ds-fl text-cap">
                                            <strong>{e.key} : </strong><span>{e.value}</span>
                                        </div>
                                    );
                                }else {
                                    return (
                                        <div key={"key-"+i} className="ds-fl">
                                            <strong className="text-cap">{e.key} : </strong><span>{e.value}</span>
                                        </div>
                                    );
                                }
                            })
                        }
                        <a href={"#CV"} role="button" className="btn-primary mr-top">
                                download cv
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}