import React from "react";

import Filterland from "./Filterlands.jsx";
import Filterpage from "./Filterpage.jsx";
import Filterproduct from "./Filterproduct.jsx";
import Filterproductsec from "./Filterproductsec.jsx";
import Filtertop from "./Filtertop.jsx";
import "./Collectionsecond.css"

function collectionsecpage() {
    return(
        <>
        <Filtertop/>
        <Filterland/>
        <div className="collectionsecpage">
           <Filterpage/>
           <div className="filterpara">
                <Filterproduct/>
                <Filterproductsec/>
           </div>
        </div>
        
        </>
    )
}
export default collectionsecpage 