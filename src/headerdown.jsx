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
    <div className="img1">
        <img className="img1 " src={img1 } alt="img1 " ></img>
        <h3>Men</h3>
    </div>
    <div className="img2">
        <img className="img2 " src={img2 } alt="img2 " ></img>
        <h3>Women</h3>
    </div>
    <div className="img3">
        <img className="img3 " src={img3 } alt="img3 " ></img>
        <h3>Kids</h3>
    </div>
    <div className="img4">
        <img className="img4 " src={img4 } alt="img4" ></img>
        <h3>Shoes</h3>
    </div>
    <div className="img5">
        <img className="img5 " src={img5 } alt="img5" ></img>
        <h3>Winter</h3>
        <h3>Collection</h3>
    </div>
    <div className="img6">
        <img className="img6" src={img6 } alt="img6 " ></img>
        <h3>Equiment &</h3>
        <h3>Cycles</h3>
    </div>
    <div className="img7">
        <img className="img7 " src={img7 } alt="img7 " ></img>
        <h3>Bags & Backpacks</h3>
    </div>
    <div className="img8">
        <img className="img8" src={img8} alt="img8 " ></img>
        <h3>Sports</h3>
        <h3>Accessori</h3>
    </div>
    </div>
)}

export default headerdown