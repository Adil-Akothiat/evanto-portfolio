import React from "react";
import ReviewCard from "./reviewCard";

export default function Clients (props) {
    return (
        <div>
            <div className="m-title">
                <h2 className="fw-normal">clients</h2>
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
                <button onClick={props.viewMore} className="my-own-btn text-capitalize rounded mx-auto mb-5">
                    {props.view}
                </button>
            </div>
        </div>
    );
}