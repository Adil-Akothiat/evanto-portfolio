import React from "react";
import ReviewCard from "./reviewCard";
import Marquee from "react-fast-marquee";
import clients from "../../admin/clients.json";

export default function Clients () {
    return (
        <div className="pb-4 client">
            <div className="m-title">
                <h2>clients</h2>
            </div>
            <div>
                <Marquee 
                    gradient={false} 
                    pauseOnHover={true}
                    speed={80}
                >
                    {
                        clients.map((client, i)=> (
                            <ReviewCard 
                                key={"reviw-"+i}
                                name={client.name}
                                image={client.image}
                                review={client.review}
                                stars={client.stars}
                                link={client.link}
                            />
                            )
                        )
                    }
                </Marquee>
            </div>
        </div>
    );
}