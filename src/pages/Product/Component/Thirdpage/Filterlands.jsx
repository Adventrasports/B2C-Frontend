import React from "react";

import "./Filterlands.css";

function filterlands() {
    return(
        <>
        <div className="filterland">
            <div className="landone">
                <div className="filters">
                  <div className="filterlin">
                      <b>FILTERS</b>
                  </div>
                  <div className="syblfilter">
                       <i class='bx bx-list-ul'></i>
                  </div>
                </div>
                <div className="dropfilter">
                  <div className="droplin">
                     <b>DROP</b>
                     <i class='bx bx-chevron-down'></i>
                  </div>
                  <div className="typshoelin">
                    <b>TYPE OF SHOES</b>
                    <i class='bx bx-chevron-down'></i>
                  </div>
                </div>
                
            </div>
            <div className="landtwo">
                <div className="sortby">
                <i class='bx bx-transfer-alt'></i>
                  <b>SORT BY</b>
                </div>
                <div className="endbox">
                  <b>Most Relevant</b>
                  <i class='bx bx-chevron-down'></i>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default filterlands ;
