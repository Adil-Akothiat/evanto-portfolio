import React from "react";

import { MdOutlineDesignServices } from "react-icons/md";
import { BiCodeCurly, BiDevices } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { FaBullhorn } from "react-icons/fa";

export default function Services () {
    return (
        <div>
            <div className="m-title">
                <h2>my services</h2>
            </div>
            <div className="my-grid services">
                <div className="my-card" data-aos="fade-top" data-aos-duration="1000">
                    <div className="mb-3">
                        <MdOutlineDesignServices />
                        <h5 className="fw-normal text-capitalize">web design</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card" data-aos="fade-top" data-aos-duration="1000">
                    <div className="mb-3">
                        <BiCodeCurly />
                        <h5 className="fw-normal text-capitalize">web development</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card" data-aos="fade-top" data-aos-duration="1000">
                    <div className="mb-3">
                        <AiOutlineAppstoreAdd />
                        <h5 className="fw-normal text-capitalize">apps development</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card" data-aos="fade-top" data-aos-duration="1000">
                    <div className="mb-3">
                        <BiDevices />
                        <h5 className="fw-normal text-capitalize">uX design</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card" data-aos="fade-top" data-aos-duration="1000">
                    <div className="mb-3">
                        <TbReportAnalytics />
                        <h5 className="fw-normal text-capitalize">business analysis</h5>
                    </div>
                    <div>
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
                        </p>
                    </div>
                </div>
                <div className="my-card" data-aos="fade-top" data-aos-duration="1000">
                    <div className="mb-3">
                        <FaBullhorn />
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