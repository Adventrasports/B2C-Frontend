import React, { useState } from "react";
import './Productpagetwo.css';
import OPS1 from './productphotos/OPS1.png';
import OPS2 from './productphotos/OPS2.png';
import OPS3 from './productphotos/OPS3.png';
import OPS4 from './productphotos/OPS4.png';
import OPS5 from './productphotos/OPS5.png';

function ProductPageTwo() {
  const [, setSelectedColor] = useState(OPS1);
  const [, setSelectedSize] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="Producttwo">
        <div className="top-headlin">
           <h3>KIPRUN</h3>
           <h2>MEN'S KIPRUN KS500 2 RUNNING SHOES - </h2>
           <h2>BLACK/YELLOW</h2>
        </div>
        <div className="rating">
          <h3> <i class='bx bxs-star-half' ></i> 4.4 | 257</h3>
        </div>
        <div className="mrp">
          <h2>₹ 6,999 MRP:<span>₹ 9,099</span></h2>
          <h5>or pay only <b>₹ 2333</b> now, rest later via <b>Axio Pay Later</b></h5>
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
          <div className="twoXL" onClick={() => handleSizeChange('2XL')}>7</div>
          <div className="threeXL" onClick={() => handleSizeChange('3XL')}>8</div>
          <div className="L" onClick={() => handleSizeChange('L')}>8.5</div>
          <div className="M" onClick={() => handleSizeChange('M')}>9.5</div>
          <div className="S" onClick={() => handleSizeChange('S')}>10.5</div>
          <div className="XL" onClick={() => handleSizeChange('XL')}>11</div>
        </div>

        <div className="ADD-BOTTON">
          <div className="ADD-CART">
            ADD TO CART
          </div>
          <div className="ADD-WISH">
            ADD TO WISHLIST
          </div>
        </div>
        <div className="rating1">
          <h3> <i class='bx bxs-star-half' ></i> 2 YEARS WARRANTY*</h3>
        </div>
        <div className="DELIVERY-LINE">
          <h2>DELIVERY & SERVICES</h2>
        </div>
        <div className="DELIVERY-CHANGE">
          <div className="NO">
            560002 <i class='bx bx-right-top-arrow-circle'></i>
          </div>
          <div className="CHANGE">
            Change
          </div>
        </div>
        <div className="Home-delivery">
          <div className="homeleft">
            <div className="symblvehical1">
            <i class='bx bx-car'></i>
            </div>
            <div className="symbldesc1">
            Home Delivery by 11th Jan 2025
            Order within <span>17hrs 8mins</span></div>
          </div>
          <div className="homeright">
             <div className="symblvehical">
             <i class='bx bx-store-alt'></i>
             </div>
            <div className="symbldesc">
              FREE pickup in Store Available
              <span>View nearest stores</span>
            </div>
          </div>
          
        </div>
        <div className="pay-delivery">
            <div className="symblvehical">
            <i class='bx bx-rupee'></i>
            </div>
            <div className="pay-desc">
              Pay on Delivery available *
        </div>




        </div>

      </div>
    </>
  );
}

export default ProductPageTwo;