import React from "react";
import './Fiveheadlin.css';

function fiveheadlin() {
    return(
        <>
        <div className="FIVEHEADLINE">
            <div className="Threeheadlin">
                <div className="headline">PRODUCT DETAILS <i class='bx bx-chevron-right'></i></div>
                <div className="headline">PRODUCT SPECIFICATION<i class='bx bx-chevron-right'></i></div>
                <div className="headline">TECHNICAL INFORMATION<i class='bx bx-chevron-right'></i></div>
            </div>
             <div className="twoheadline">
                <div className="headline">MATERIAL & CARE<i class='bx bx-chevron-right'></i></div>
                <div className="headline">TESTED BY<i class='bx bx-chevron-right'></i></div>
             </div>

        </div>
        </>
    )
}

export default fiveheadlin