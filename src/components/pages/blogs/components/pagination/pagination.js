import React from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination (props) {
    return (
        <div className="pagination">
            <button id="prev" className="rounded-left" onClick={props.prev}><FaAngleLeft /></button>
            <button id="next" className="rounded-right" onClick={props.next}><FaAngleRight /></button>
        </div>
    );
}