import React from "react";

import './collectionlandtwo';
import shoes1 from './Shoesphotos/shoes9.png';
import shoes2 from './Shoesphotos/shoes10.png';
import shoes3 from './Shoesphotos/shoes11.png';
import shoes4 from './Shoesphotos/shoes12.png';
import shoes5 from './Shoesphotos/shoes13.png';
import shoes6 from './Shoesphotos/shoes14.png';
import shoes7 from './Shoesphotos/shoes15.png';
import shoes8 from './Shoesphotos/shoes16.png';

function collectionlandtwo() {
    return(
        <>
        <div className="headerdown">
            <div className="img1">
                <img className="img1 " src={shoes1 } alt="img1 " ></img>
                <h3>Trekking Boots</h3>
            </div>
            <div className="img2">
                <img className="img2 " src={shoes2 } alt="img2 " ></img>
                <h3>Running Shoes</h3>
            </div>
            <div className="img3">
                <img className="img3 " src={shoes3 } alt="img3 " ></img>
                <h3>Hiking Shoes</h3>
            </div>
            <div className="img4">
                <img className="img4 " src={shoes4 } alt="img4" ></img>
                <h3>Walking Shoes</h3>
            </div>
            <div className="img5">
                <img className="img5 " src={shoes5 } alt="img5" ></img>
                <h3>Waterproof Shoes</h3>
                
            </div>
            <div className="img6">
                <img className="img6" src={shoes6 } alt="img6 " ></img>
                <h3>Socks</h3>
                
            </div>
            <div className="img7">
                <img className="img7 " src={shoes7 } alt="img7 " ></img>
                <h3>Sandals</h3>
            </div>
            <div className="img8">
                <img className="img8" src={shoes8} alt="img8 " ></img>
                <h3>Flip-flops</h3>
                
            </div>
            </div>
        </>
    )
}

export default collectionlandtwo