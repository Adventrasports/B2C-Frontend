import React from "react";
import './fourblock.css';
import block1 from './assets/block1.png';
import block2 from './assets/block2.png';
import block3 from './assets/block3.png';
import block4 from './assets/block4.png';


function fourblock() {
    return(
        <>
        <div className="headline1">
            <h2>BUDGET SPORT SHOPPING</h2>
        </div>
        <div className="fourblock">
            <div className="blockone"> 
                <img className="block1" src={block1} alt="block1" ></img>
            </div>
            <div className="blockone"> 
                <img className="block1" src={block2} alt="block1" ></img>
            </div>
            <div className="blockone"> 
                <img className="block1" src={block3} alt="block1" ></img>
            </div>
            <div className="blockone"> 
                <img className="block1" src={block4} alt="block1" ></img>
            </div>
        </div>
        </>

)}

export default fourblock