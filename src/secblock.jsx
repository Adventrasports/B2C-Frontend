import React from "react";
import './Secblock.css';
import block5 from './assets/block5.png';
import block6 from './assets/block6.png';
import block7 from './assets/block7.png';
import block8 from './assets/block8.png';


function secblock() {
    return(
        <>
        <div className="secblock">
            <h2>OFFERS FOR YOU</h2>
        </div>
        <div className="secblock1">
            <div className="block5"> 
                <img className="block5" src={block5} alt="block5" ></img>
            </div>
            <div className="block6">
            <img className="block6" src={block6} alt="block6" ></img>
            </div>
            <div className="block7">
            <img className="block7" src={block7} alt="block7" ></img>
            </div>
            <div className="block8">
            <img className="block8" src={block8} alt="block8" ></img>
            </div>
        </div>
        </>

)}

export default secblock