import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Share (props) {
    return (
        <div className="share position-absolute">
            <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="text-main m-0 text-uppercase fw-normal">share this page</h5>
                <button className="close-share" onClick={props.handleClick}><Unicons.UilMultiply /></button>
            </div>
            <div className="body-card text-center">
                <h5 className="text-uppercase pt-5 pb-3">if you like it share it!</h5>
                <div className="text-capitalize social text-center mx-auto my-3">
                        <div>
                            <a href="#whatsapp">
                                <Unicons.UilWhatsapp />
                            </a>
                            <a href="#whatsapp">whatsapp</a>
                        </div>
                        <div>
                            <a href="#email">
                                <Unicons.UilEnvelope />
                            </a>
                            <a href="#email">email</a>
                        </div>
                        <div>
                            <a href="#facebook">
                                <Unicons.UilFacebookF />
                            </a>
                            <a href="#facebook">facebook</a>
                        </div>
                        <div>
                            <a href="#twitter">
                                <Unicons.UilTwitter/>
                            </a>
                            <a href="#twitter">twitter</a>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}