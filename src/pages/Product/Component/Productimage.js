import React from "react";
import Productpageone from "./productpageone";
import Productpagetwo from "./productpagetwo";
import './Productpage.css'

function productimage() {
    return(
        <>
      <div className="productpage">
      <Productpageone/>
      <Productpagetwo/>
      </div>
        </>
    )
}

export default productimage