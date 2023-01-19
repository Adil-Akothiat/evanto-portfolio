import React from "react";
import ReviewCard from "./reviewCard";

export default function Clients (props) {
    return (
        <div>
            <div className="m-title">
                <h2>clients</h2>
            </div>
            <div className="my-grid clients">
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
                <button onClick={props.viewMore} className="btn-secondary curs-p text-cap mr-b-sm rounded-sm">
                    {props.view}
                </button>
            </div>
        </div>
    );
}