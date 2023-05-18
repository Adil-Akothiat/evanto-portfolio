import React from "react";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Social () {
    return (
        <div>
            <p className="fw-normal">
                I'm a React Frontend Developer with +3 years of experience. I can build a reactive and pixel perfect design. I've been worked to +25 projects using React and pure CSS. I can provide a clean code and responsive user interface.
            </p>
            <ul className="social-links">
                <li>
                    <a 
                        href="#twitter"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="twitter"
                    >
                        <AiFillTwitterCircle />
                    </a>
                </li>
                <li>
                    <a 
                        href="#github"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="github"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a 
                        href="#linkedin"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="linkedin"
                    >
                        <AiFillLinkedin />
                    </a>
                </li>
            </ul>
            <Link to="/contact" className="hire-me">hire me</Link>
        </div>     
    );
}
