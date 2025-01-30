import React from "react";
import './Filterproductsec.css';
import img1 from './Shoesphotos/productimg1.png';
import img2 from './Shoesphotos/productimg2.png';
import img3 from './Shoesphotos/productimg3.png';
import img4 from './Shoesphotos/productimg4.png';
import img5 from './Shoesphotos/productimg5.png';


function filterproductsec() {
    return(
        <>
            <div className="product">
                <div className="producthedlin">
                    <b>BEST SELLER</b>
                </div>
             
                <div className="productdev">


                     <div className="productfivdev">
                               
                            <div className="productfirst ">
                                 <div className="shoesproductone">
                                     <img className="productimgone " src={img1} alt="Landscap" ></img> 
                                 </div>
                                 <div className="shoesproducttwo">
                                     <img className="productimgtwo " src={img1} alt="Landscap" ></img> 
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
                            <div className="productsec ">
                                 <div className="shoesproductone">
                                     <img className="productimgone " src={img2} alt="Landscap" ></img> 
                                 </div>
                                 <div className="shoesproducttwo">
                                     <img className="productimgtwo " src={img2} alt="Landscap" ></img> 
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
                            <div className="productthird ">
                                 <div className="shoesproductone">
                                     <img className="productimgone " src={img3} alt="Landscap" ></img> 
                                 </div>
                                 <div className="shoesproducttwo">
                                     <img className="productimgtwo " src={img3} alt="Landscap" ></img> 
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
                            <div className="productfourth">
                                 <div className="shoesproductone">
                                     <img className="productimgone " src={img4} alt="Landscap" ></img> 
                                 </div>
                                 <div className="shoesproducttwo">
                                     <img className="productimgtwo " src={img4} alt="Landscap" ></img> 
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
                            <div className="productfifth ">
                                 <div className="shoesproductone">
                                     <img className="productimgone " src={img5} alt="Landscap" ></img> 
                                 </div>
                                 <div className="shoesproducttwo">
                                     <img className="productimgtwo " src={img5} alt="Landscap" ></img> 
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
                           
                             
                             
                     </div>
             
                 </div>
             </div>
        </>
    )
}

export default filterproductsec