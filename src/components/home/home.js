import React, {useEffect} from "react";
import "../../styles/home/home.css";
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter.svg";
import {ReactComponent as LinkdinIcon} from "../../assets/icons/linkdin.svg";
import {ReactComponent as GithubIcon} from "../../assets/icons/github.svg";
import TypeIt from "typeit-react";

export default function Home () {
    useEffect(()=> {
        const lists = document.querySelectorAll("li");
        lists.forEach(li=> {
            if(li.dataset.page==="home") {
                li.classList.add("focus")
            }else {
                li.classList.remove("focus")
            }
        });
    }, []);
    return (
        <main className="home">
            <div className="container">
                <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="portrait"
                />
                <div className="social">
                    <a href={"#/twitter"}><TwitterIcon /></a>
                    <a href={"#/linkdin"}><LinkdinIcon /></a>
                    <a href={"#/github"}><GithubIcon /></a>
                </div>
                <h3>ADIL AKOTHIAT</h3>
                <TypeIt
                options={{
                    loop:true
                }}
                getBeforeInit={(instance) => {
                    instance
                        .type("uX designer")
                        .pause(750)
                        .delete()
                        .type("uI designer")
                        .pause(700)
                        .delete()
                        .type("frontend developer")
                        .pause(400)
                        .delete()
                        .type("Streamer")
                    return instance;
                }}
                />
                <button>
                    DOWNLOAD CV
                </button>
            </div>
        </main>
    );
}