import React from "react";
import './Headerdown.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';

function headerdown() {
return (
    <div className="headerdown">
    <div className="imgone">
    <img className="img5 " src={img5 } alt="img5" ></img>
        <h4>Winter</h4>
        <h4>Collection</h4>
        
    </div>
    <div className="imgfive">
    <img className="img1 " src={img1 } alt="img1 " ></img>
    <h4>Men</h4>
    </div>
    <div className="imgtwo">
        <img className="img2 " src={img2 } alt="img2 " ></img>
        <h4>Women</h4>
    </div>
    <div className="imgthree">
        <img className="img3 " src={img3 } alt="img3 " ></img>
        <h4>Kids</h4>
    </div>
    <div className="imgfour">
        <img className="img4 " src={img4 } alt="img4" ></img>
        <h4>Shoes</h4>
    </div>
    <div className="imgsix">
        <img className="img6" src={img6 } alt="img6 " ></img>
        <h4>Equiment &</h4>
        <h4>Cycles</h4>
    </div>
    <div className="imgseven">
        <img className="img7 " src={img7 } alt="img7 " ></img>
        <h4>Bags & Backpacks</h4>
    </div>
    <div className="imgeight">
        <img className="img8" src={img8} alt="img8 " ></img>
        <h4>Sports</h4>
        <h4>Accessori</h4>
    </div>
    </div>
)}

export default headerdown