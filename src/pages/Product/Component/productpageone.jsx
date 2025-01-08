import React from "react";
import './Productpageone.css';
import blockpic1 from './productphotos/blockpic1.png';
import blockpic2 from './productphotos/blockpic2.png';
import blockpic3 from './productphotos/blockpic3.png';
import blockpic4 from './productphotos/blockpic4.png';
import blockpic5 from './productphotos/blockpic5.png';
import blockpic6 from './productphotos/blockpic6.png';

function productpageone() {
    return(<>
    <div className="productone">
        <div className="block1">
            <div className="picone">
                <img className="blockpic1 " src={blockpic1 } alt="blockpic1 " ></img>
            </div>
            <div className="pictwo">
            <img className="blockpic2 " src={blockpic2 } alt="blockpic2 " ></img>
            </div>
        </div>
        <div className="block2">
            <div className="picthree">
            <img className="blockpic3 " src={blockpic3 } alt="blockpic3 " ></img>
            </div>
            <div className="picfour">
            <img className="blockpic4 " src={blockpic4 } alt="blockpic4 " ></img>
            </div>
        </div>
        <div className="block3">
            <div className="picfive">
            <img className="blockpic5 " src={blockpic5 } alt="blockpic5 " ></img>
            </div>
            <div className="picsix">
            <img className="blockpic6 " src={blockpic6 } alt="blockpic6 " ></img>
            </div>
        </div>
    </div>
    </>)
}

export default productpageone