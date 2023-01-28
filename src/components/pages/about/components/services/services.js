import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Services () {
    return (
        <div>
            <div className="m-title mb-5">
                <h2 className="fw-normal">my services</h2>
            </div>
            <div className="my-grid services">
                <div className="my-card hi-sc-ef scroll">
                    <div className="mb-3">
                        <Unicons.UilPalette />
                        <h5 className="fw-normal text-capitalize">web design</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card hi-sc-ef scroll">
                    <div className="mb-3">
                        <Unicons.UilBracketsCurly />
                        <h5 className="fw-normal text-capitalize">web development</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card hi-sc-ef scroll">
                    <div className="mb-3">
                        <Unicons.UilApps />
                        <h5 className="fw-normal text-capitalize">apps development</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card hi-sc-ef scroll">
                    <div className="mb-3">
                        <Unicons.UilDesktopAlt />
                        <h5 className="fw-normal text-capitalize">uX design</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card hi-sc-ef scroll">
                    <div className="mb-3">
                        <Unicons.UilAnalytics />
                        <h5 className="fw-normal text-capitalize">business analysis</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card hi-sc-ef scroll">
                    <div className="mb-3">
                        <Unicons.UilMegaphone />
                        <h5 className="fw-normal text-capitalize">sEO marketing</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}