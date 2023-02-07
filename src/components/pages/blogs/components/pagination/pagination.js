import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Pagination (props) {
    return (
        <div className="pagination">
            <button id="prev rounded-left" onClick={props.prev}><Unicons.UilAngleLeft /></button>
            <button id="next rounded-right" onClick={props.next}><Unicons.UilAngleRight /></button>
        </div>
    );
}