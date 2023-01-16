import React from "react";
import ReviewCard from "./reviewCard";

export default function Clients (props) {
    return (
        <div className="pd-4">
            <div className="head-page">
                <h2>clients</h2>
            </div>
            <div className="body-page clients cards">
                {
                    props.clients.map((client, i)=> (
                        <ReviewCard 
                            key={"reviw-"+i}
                            name={client.name}
                            image={client.image}
                            review={client.review}
                            link={client.link}
                        />
                        )
                    )
                }
            </div>
            <div className="view-more">
                <button onClick={props.viewMore}>
                    {props.view}
                </button>
            </div>
        </div>
    );
}