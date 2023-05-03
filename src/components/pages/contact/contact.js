import React, { Suspense } from "react";
import "../../../styles/pages/contact.css";
import Loader from "../../loader/loader";
const ContactForm = React.lazy(()=> import("./component/contactForm"));
const ContactInfo = React.lazy(()=> import("./component/contactInfo"))

export default function Contact () {
    return (
        <div className="contact fixed-right">
            <div className="main-size">
                <div className="m-title m-title-top mb-5">
                    <h2 className="fw-normal text-main">let's talk</h2>
                </div>
                <div className="form-info d-flex justify-content-between">
                    <Suspense fallBack={<Loader />}>
                        <ContactForm />
                        <ContactInfo />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}