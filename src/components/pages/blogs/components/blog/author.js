import React from "react";

export default function Author ({ image, name, job, bio}) {
    return (
        <div className="author">
            {
                image?(
                    <div>
                        <img className="rounded" src={image} alt={name}/>
                    </div>
                ):null
            }
            <div className="author-info">
                <div>
                    {name?<h4 className="text-capitalize fw-light">{name}</h4>:null}
                    {job?<h6 className="fw-light">{job}</h6>:null}
                </div>
                {
                    bio?(
                        <div className="my-3">
                            <p>{bio}</p>
                        </div>
                    ):null
                }
            </div>
        </div>
    );
}