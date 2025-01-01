import React from "react";
import './Thirdblock.css';
import block9 from './assets/block9.png';
import block10 from './assets/block10.png';
import block11 from './assets/block11.png';
import block12 from './assets/block12.png';


function thirdblock() {
    return(
        <>
        <div className="thirdblock">
            <h2>AFTER SALES SERVICES</h2>
        </div>
        <div className="thirdblock1">
            <div className="block9"> 
                <img className="block9" src={block9} alt="block9" ></img>
            </div>
            <div className="block10">
            <img className="block10" src={block10} alt="block10" ></img>
            </div>
            <div className="block11">
            <img className="block11" src={block11} alt="block11" ></img>
            </div>
            <div className="block12">
            <img className="block12" src={block12} alt="block12" ></img>
            </div>
        </div>
        </>

)}

export default thirdblock