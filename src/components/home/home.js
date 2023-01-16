import React from "react";
import "../../styles/pages/home.css";
import TypeIt from "typeit-react";
import * as Unicons from "@iconscout/react-unicons";
import BackgroundAnimated from "./animatedBackground";
import Loader from "../loader/loader";
import homeData from "../../data/home.json";

export default function Home () {
    return (
        <div className="home fixed-right">
            <div className="center">
                <Loader />
                <BackgroundAnimated />
                <div className="container pd-4">
                    <div>
                        <div className="presentation">
                            <TypeIt
                                getBeforeInit={(instance) => {
                                    instance
                                        .type("hi, i am adil khayt")
                                    return instance;
                                }}
                            />
                        </div>
                        <div className="jobs">
                            <TypeIt
                                options={{loop: true}}
                                getBeforeInit={(instance) => {
                                    instance
                                        .type("freelancre")
                                        .pause(750)
                                        .delete(2)
                                        .pause(500)
                                        .type("er")
                                        .pause(750)
                                        .delete()
                                        .type("web designer")
                                        .pause(750)
                                        .delete()
                                        .type("developer")
                                        .pause(500)
                                        .delete()
                                    return instance;
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p>
                            {homeData.selfIntroduction}
                        </p>
                    </div>
                    <div className="social-links">
                        <a href={"#twitter"} target={"_blank"} rel={"noreferrer"}>
                            <Unicons.UilTwitter />
                        </a>
                        <a href={"#github"} target={"_blank"} rel={"noreferrer"}>
                            <Unicons.UilGithub />
                        </a>
                        <a href={"#linkedin"} target={"_blank"} rel={"noreferrer"}>
                            <Unicons.UilLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}