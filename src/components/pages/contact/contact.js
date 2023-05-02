import React from "react";
import "../../../styles/pages/contact.css";
import ContactForm from "./component/contactForm";
import ContactInfo from "./component/contactInfo";

export default function Contact () {
    return (
        <div className="contact fixed-right">
            <div className="main-size">
                <div className="m-title m-title-top mb-5">
                    <h2 className="fw-normal text-main">let's talk</h2>
                </div>
                <div className="form-info d-flex justify-content-between">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}