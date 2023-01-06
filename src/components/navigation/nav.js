import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../styles/nav/nav.css";
import { Link } from "react-router-dom";

export default function Nav () {
    const focus = ({target})=> {
        document.querySelector(".focus").classList.remove("focus");
        target.classList.add("focus");
    }
    return (
        <nav>
            <div className="hero">
                <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt={"hero"}/>
                <h5>adil akhtiyat</h5>
            </div>
            <ul>
                <Link to={"/"} label-aria="home">
                    <li className="focus" onClick={focus} data-page="home">
                        <Unicons.UilEstate /><span>Home</span>
                    </li>
                </Link>
                <Link to={"/about"} label-aria="about">
                <li onClick={focus} data-page="about" >
                    <Unicons.UilUserCircle /><span>About</span>
                </li>
                </Link>
                <Link to={"/portfolio"} label-aria="portfolio">
                <li onClick={focus} data-page="portfolio">
                    <Unicons.UilSuitcaseAlt /><span>Portfolio</span>
                </li>
                </Link>
                <Link to={"/contact"} label-aria="contact">
                <li onClick={focus} data-page="contact">
                    <Unicons.UilEnvelopeEdit /><span>Contact</span>
                </li>
                </Link>
            </ul>
            <p>
                © {new Date().getFullYear()} ADIL AKHTIYAT. All Rights Reserved.
            </p>
        </nav>
    );
}