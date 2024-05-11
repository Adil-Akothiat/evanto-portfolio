import React from "react";
import { RiMailOpenFill } from "react-icons/ri";
import { MdWifiCalling3 } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

export default function ContactInfo () {
    return (
        <div className="contact-info">
            <div>
                <HiLocationMarker />
                <div>
                    <h5>morocco, tangier</h5>
                    <h5>157 Branes 1 Street</h5>
                </div>
            </div>
            <div>
                <RiMailOpenFill />
                <div>
                    <h5>
                        <a 
                            className="text-lowercase"
                            href="mailto:adilakothia@adil.com"
                        >adilakothia@adil.com</a>
                    </h5>
                    <h5>
                        <a 
                            className="text-lowercase"
                            href="mailto:adilsupport@mail.com"
                        >adilsupport@mail.com</a>
                    </h5>
                </div>
            </div>
            <div>
                <MdWifiCalling3 />
                <div>
                    <h5><a
                        href="tel:0867870XXX"
                    >+212867870XXX</a></h5>
                    <h5><a 
                        href="tel:0867870XXX"
                    >+212867870XXX</a></h5>
                </div>
            </div>
        </div>
    );
}
