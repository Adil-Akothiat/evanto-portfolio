import React from "react";

import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function Share (props) {
    return (
        <div className="share">
            <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="text-main m-0 text-uppercase fw-normal">share this page</h5>
                <button className="close-share" onClick={props.handleClick}><IoMdClose /></button>
            </div>
            <div className="body-card text-center">
                <h5 className="text-uppercase pt-5 pb-3">if you like it share it!</h5>
                <div className="text-capitalize social text-center mx-auto my-3">
                        <div>
                            <a href="#whatsapp">
                                <BsWhatsapp />
                            </a>
                            <a href="#whatsapp">whatsapp</a>
                        </div>
                        <div>
                            <a href="#email">
                                <HiOutlineMail />
                            </a>
                            <a href="#email">email</a>
                        </div>
                        <div>
                            <a href="#facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#facebook">facebook</a>
                        </div>
                        <div>
                            <a href="#twitter">
                                <BsTwitter />
                            </a>
                            <a href="#twitter">twitter</a>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}