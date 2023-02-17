import React from "react";
import TypeIt from "typeit-react";

export default function TypingAnimation () {
    return (
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
    );
}