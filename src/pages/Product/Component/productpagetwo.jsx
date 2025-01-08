import React, { useState } from "react";
import './Productpagetwo.css';
import OPS1 from './productphotos/OPS1.png';
import OPS2 from './productphotos/OPS2.png';
import OPS3 from './productphotos/OPS3.png';
import OPS4 from './productphotos/OPS4.png';
import OPS5 from './productphotos/OPS5.png';

function ProductPageTwo() {
  const [selectedColor, setSelectedColor] = useState(OPS1);
  const [selectedSize, setSelectedSize] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="producttwo">
        <div className="top-headlin">
           <h3>FORCLAZ</h3>
           <h2>Men Puffer Jacket for Trekking - MT100 -5°C Black</h2>
        </div>
        <div className="rating">
          <h3>4.5 | 7.7k</h3>
        </div>
        <div className="mrp">
          <h2>$ 2,999 <span>MRP: $3699</span></h2>
          <h5>or pay only ₹ 999 now, rest later via Axio Pay Later</h5>
        </div>
        <div className="colour-ops">
            <h3>COLOUR OPTIONS</h3>
        </div>
        <div className="colourops">
          <div className="OPS1" onClick={() => handleColorChange(OPS1)}>
            <img className="OP1" src={OPS1} alt="Black Puffer Jacket - Front View" />
          </div>
          <div className="OPS2" onClick={() => handleColorChange(OPS2)}>
            <img className="OP2" src={OPS2} alt="Green Puffer Jacket - Front View" />
          </div>
          <div className="OPS3" onClick={() => handleColorChange(OPS3)}>
            <img className="OP3" src={OPS3} alt="Red Puffer Jacket - Front View" />
          </div>
          <div className="OPS4" onClick={() => handleColorChange(OPS4)}>
            <img className="OP4" src={OPS4} alt="Blue Puffer Jacket - Front View" />
          </div>
          <div className="OPS5" onClick={() => handleColorChange(OPS5)}>
            <img className="OP5" src={OPS5} alt="Gray Puffer Jacket - Front View" />
          </div>
        </div>

        <div className="OPSSIZE">
          <h3>SELECT SIZE</h3>
        </div>

        <div className="SIZEBLOCK">
          <div className="twoXL" onClick={() => handleSizeChange('2XL')}>2XL</div>
          <div className="threeXL" onClick={() => handleSizeChange('3XL')}>3XL</div>
          <div className="L" onClick={() => handleSizeChange('L')}>L</div>
          <div className="M" onClick={() => handleSizeChange('M')}>M</div>
          <div className="S" onClick={() => handleSizeChange('S')}>S</div>
          <div className="XL" onClick={() => handleSizeChange('XL')}>XL</div>
        </div>

        <div className="ADD-BOTTON">
          <div className="ADD-CART">
            ADD TO CART
          </div>
          <div className="ADD-WISH">
            ADD TO WISHLIST
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPageTwo;