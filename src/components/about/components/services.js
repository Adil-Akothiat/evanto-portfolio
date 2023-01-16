import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Services () {
    return (
        <div className="pd-4">
            <div className="head-page">
                <h2>my services</h2>
            </div>
            <div className="body-page cards services">
                <div>
                    <div>
                        <Unicons.UilPalette />
                        <h3>web design</h3>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Unicons.UilBracketsCurly />
                        <h3>web development</h3>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Unicons.UilApps />
                        <h3>apps development</h3>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Unicons.UilDesktopAlt />
                        <h3>uX design</h3>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}