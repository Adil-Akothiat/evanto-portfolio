import React, { useState } from "react";
import Alert from "./alert";

export default function ContactForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState({open: false, alertStatus: false});

    const focusHandler =  ({target})=> target.parentElement.classList.add("focus-on");
    const blurHandler = ({target})=> {
        if(target.value==="") {
            target.parentElement.classList.remove("focus-on");
        }
    }
    const submitHandler =  (e)=> {
        e.preventDefault();
        setAlert({open: true, alertStatus: true});
        let time = setTimeout(()=> {
            setAlert({open: false, alertStatus: true});
        }, 2000)
        // reset
        setName(""); setEmail(""); setMessage("");
        document.querySelectorAll(".focus-on").forEach(e=> e.classList.remove("focus-on"));
        return ()=> {
            setTimeout(time);
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="row name form-gr">
                <input 
                    type="text"
                    id="name"
                    required
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    onChange={({target})=> setName(target.value)}
                    value={name}
                />
            </div>
            <div className="row email form-gr">
                <input 
                    type="email"
                    id="email"
                    required
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    onChange={({target})=> setEmail(target.value)}
                    value={email}
                />
            </div>
            <div className="row message form-gr">
                <textarea 
                    id="message"
                    required
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    onChange={({target})=> setMessage(target.value)}
                    value={message}
                />
            </div>
            <div className="row send">
                <button type="submit">send message</button>
            </div>
            <div className="row alert-">
                {
                    alert.open?<Alert alertStatus={alert.alertStatus}/>:null
                }
            </div>
        </form>
    );
}