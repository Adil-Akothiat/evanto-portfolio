import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Services () {
    return (
        <div>
            <div className="m-title">
                <h2>my services</h2>
            </div>
            <div className="my-grid services">
                <div className="card">
                    <div>
                        <Unicons.UilPalette />
                        <h3 className="med-text text-cap">web design</h3>
                    </div>
                    <div>
                        <p className="sm-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <Unicons.UilBracketsCurly />
                        <h3 className="med-text text-cap">web development</h3>
                    </div>
                    <div>
                        <p className="sm-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <Unicons.UilApps />
                        <h3 className="med-text text-cap">apps development</h3>
                    </div>
                    <div>
                        <p className="sm-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <Unicons.UilDesktopAlt />
                        <h3 className="med-text text-cap">uX design</h3>
                    </div>
                    <div>
                        <p className="sm-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}