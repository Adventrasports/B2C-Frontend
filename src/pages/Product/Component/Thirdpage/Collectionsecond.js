import React from "react";

import Filterpage from "./Filterpage.jsx";
import Filterproduct from "./Filterproduct.jsx";
import Filtertop from "./Filtertop.jsx";
import "./Collectionsecond.css"

function collectionsecpage() {
    return(
        <>
        <Filtertop/>
        <div className="collectionsecpage">
        <Filterpage/>
        <Filterproduct/>
        
        </div>
        
        </>
    )
}
export default collectionsecpage 