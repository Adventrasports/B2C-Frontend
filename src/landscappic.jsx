import React from "react";
import './Landscappic.css';
import pic1 from './assets/pic1.png';
import pic1down from './assets/pic1down.png';

function Landscappic() {
    return (
        <>
        <div className="Landscappic">
                <img className="Landscap1 " src={pic1} alt="Landscap" ></img>
                
        </div>
        <div className="Landscappicdown">
            <img className="Landscappicdown " src={pic1down} alt="Landscap" ></img>
        </div>
        </>
    )}
export default Landscappic