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
                    <div className="droplin">
                      <b>DROP</b>
                    </div>
                    <div className="dropsymbl">
                      <i class='bx bx-chevron-down'></i>
                    </div>
                  </div>
                  <div className="typshoelin">
                    <div className="typeshoe">
                       <b>TYPE OF SHOES</b>
                    </div>
                    <div className="typesymbl">
                       <i class='bx bx-chevron-down'></i>
                    </div>
                  </div>
                </div>
            </div>
            <div className="landtwo">
                <div className="sortby">
                  <div className="sortsymbl">
                    <i class='bx bx-transfer-alt'></i>
                  </div>
                  <div className="sortlin">
                    <b>SORT BY</b>
                  </div>
                </div>
                <div className="endbox">
                  <div className="relevent">
                    <b>Most Relevant</b>
                  </div>
                  <div className="relaventsymbl">
                    <i class='bx bx-chevron-down'></i>
                  </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default filterlands ;
