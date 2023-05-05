import React, { useState, memo, useCallback } from "react";
import Alert from "./alert";

export default memo(function Form () {
    const [subs, setSubs] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [email, setEmail] = useState("");

    const subscribe  = useCallback(function(e) {
        e.preventDefault();
        setEmail("");
        setSubs(true);
        setShowAlert(true);
        let timer = setTimeout(()=> {
            setShowAlert(false);
        }, 4000);
        return ()=> {
            clearTimeout(timer);
        }
    }, [])
    return (
        <form id="form" className="subscription position-relative" onSubmit={subscribe}>
            <h3 className="text-capitalize text-main">subscribe for more new articles</h3>
            <p>
                Follow us to inbox our new articles about technology.
            </p>
            <div>
                <input type="email" name="mail" placeholder="@example.com" required value={email} onChange={({target})=> setEmail(target.value)}/>
                <button className="mt-2" type="submit">subscribe</button>
            </div>
            {
                showAlert?<Alert message={subs?"thanks for subscription":"please try again"} status={subs?true:false}/>:null
            }
        </form>
    );
})