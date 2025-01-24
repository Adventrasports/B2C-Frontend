import React from "react";
import './Filterproduct.css';
import img1 from './Shoesphotos/productimg1.png';
import img2 from './Shoesphotos/productimg2.png';
import img3 from './Shoesphotos/productimg3.png';
import img4 from './Shoesphotos/productimg4.png';
import img5 from './Shoesphotos/productimg5.png';
import img6 from './Shoesphotos/productimg6.png';
import img7 from './Shoesphotos/productimg7.png';
import img8 from './Shoesphotos/productimg8.png';

function filterproduct() {
    return(
        <>
        <div className="product">
            <div className="shoesproduct">
            
                        <div className="productfivdev">
            
                            <div className="productfouedev">
                            <div className="producttwo">
                                <div className="shoesproduct1">
                                    <img className="filterimg1 " src={img1} alt="Landscap" ></img> 
                                </div>
                                <div className="shoesproduct2">
                                    <img className="filterimg2 " src={img2} alt="Landscap" ></img> 
                                </div>
                                <div className="producthead">
                                    <h3>QUECHUA</h3>
                                    <p><span>Men waterproof Hiking Shoes Mid Ankle</span></p>
                                    <h5>₹ 6,999 </h5> 
                                </div>
                                <div className="cart-button">
                                    <h4>ADD TO CART</h4>
                                </div>
                            </div>
                            <div className="productthree">
                                <div className="shoesproduct1">
                                    <img className="filterimg1 " src={img3} alt="Landscap" ></img> 
                                </div>
                                <div className="shoesproduct2">
                                    <img className="filterimg2 " src={img4} alt="Landscap" ></img> 
                                </div>
                                <div className="producthead">
                                    <h3>FORCLAZ</h3>
                                    <p><span>Men waterproof Trekking Shoes Mid Ankle</span></p>
                                    <h5>₹ 6,999 </h5> 
                                </div>
                                <div className="cart-button">
                                    <h4>ADD TO CART</h4>
                                </div>
                            </div>
                            <div className="productfour">
                                <div className="shoesproduct1">
                                    <img className="filterimg1 " src={img5} alt="Landscap" ></img> 
                                </div>
                                <div className="shoesproduct2">
                                    <img className="filterimg2 " src={img6} alt="Landscap" ></img> 
                                </div>
                                <div className="producthead">
                                    <h3>QUECHUA</h3>
                                    <p><span>Men low Ankle Shoes Grey-NH100</span></p>
                                    <h5>₹ 6,999 </h5> 
                                </div>
                                <div className="cart-button">
                                    <h4>ADD TO CART</h4>
                                </div>
                            </div>
                            <div className="productfive">
                                <div className="shoesproduct1">
                                    <img className="filterimg1 " src={img7} alt="Landscap" ></img> 
                                </div>
                                <div className="shoesproduct2">
                                    <img className="filterimg2 " src={img8} alt="Landscap" ></img> 
                                </div>
                                <div className="producthead">
                                    <h3>FORCLAZ</h3>
                                    <p><span>Women's waterproof Leather High Trekking</span></p>
                                    <h5>₹ 6,999 </h5> 
                                </div>
                                <div className="cart-button">
                                    <h4>ADD TO CART</h4>
                                </div>
                            </div>
                            </div>
            
                        </div>
                    </div>
        </div>
        </>
    )
}

export default filterproduct