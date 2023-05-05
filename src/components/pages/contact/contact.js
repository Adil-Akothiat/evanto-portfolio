import React, { Suspense, lazy } from "react";
import "../../../styles/pages/contact.css";
import Loader from "../../loader/loader";
const ContactForm = lazy(()=> import("./component/contactForm"));
const ContactInfo = lazy(()=> import("./component/contactInfo"))

export default function Contact () {
    return (
        <div className="contact fixed-right">
            <Suspense fallback={<Loader />}>
                <div className="main-size">
                    <div className="m-title m-title-top mb-5">
                        <h2 className="fw-normal text-main">let's talk</h2>
                    </div>
                    <div className="form-info d-flex justify-content-between">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}