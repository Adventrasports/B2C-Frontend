import React from "react";
import Productpageone from "./productpageone";
import Productpagetwo from "./productpagetwo";
import './Productpage.css'
import Fiveheadlin from "./fiveheadlin";

function productimage() {
    return(
        <>
      <div className="productpage">
      <Productpageone/>
      <Productpagetwo/>
      </div>
      <Fiveheadlin/>
        </>
    )
}

export default productimage