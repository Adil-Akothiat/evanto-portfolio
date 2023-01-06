import React, {useEffect} from "react";
import "../../styles/contact/contact.css";
import * as Unicons from "@iconscout/react-unicons";

export default function Contact () {
    useEffect(()=> {
        const lists = document.querySelectorAll("li");
        lists.forEach(li=> {
            if(li.dataset.page==="contact") {
                li.classList.add("focus");
            }else {
                li.classList.remove("focus");
            }
        })
    }, []);
    return (
        <main className="contact">
            <h3>Get in Touch</h3>
            <div>
            <div className="contact-info">
                <div>
                    <Unicons.UilLocationPinAlt />
                    <span>Avon str. 22, NYC, LOREM</span>
                </div>
                <div>
                    <Unicons.UilPhoneAlt />
                    <span>+212 062 155 02 02</span>
                </div>
                <div>
                    <Unicons.UilEnvelopeAlt />
                    <span>example@gmail.com</span>
                </div>
                <div>
                    <Unicons.UilGithubAlt />
                    <span>@username</span>
                </div>
            </div>
            <form onSubmit={e=> e.preventDefault()}>
                <label htmlFor="name" id="-name">
                    <input type="text" name="name" id="name" placeholder="Name" required={true}/>
                </label>
                <label htmlFor="email" id="-email">
                    <input type="email" name="email" id="email" placeholder="Email" required={true}/>
                </label>
                <label htmlFor="message" id="-message">
                    <textarea name="message" id="message" placeholder="Message" required={true}/>
                </label>
                <label htmlFor="submit">
                    <input type="submit" id="submit" value="submit message"/>
                </label>
            </form>
            </div>
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12949.927319394976!2d-5.8248361!3d35.76353885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1673025743944!5m2!1sen!2sma" width="600" height="450" style={{border:"0", width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </main>
    );
}