import React from "react";
import './Header.css';

function header() {
return (
<div className="header">
    <div className="header-left">
        <div className="symbol"><i class='bx bx-menu'></i></div>
        <div className="sportname">
            <h5>ALL </h5>
            <h5>SPORTS</h5>
            </div>
        <div className="logo"><h3>DECATHLON</h3></div>
    </div>
    <div className="placeholder">
    <input placeholder='          Search for ...'></input>
    <div className="search-bar">
    <i class='bx bx-search'></i>
    </div>
    </div>
    <div className="header-right">
        <div className="location">
            <h5>Delivery </h5>
            <h5>location</h5>
            </div>
        <div className="signname">
            <i class='bx bx-user' ></i>
            <h5>Sign</h5>
        </div>
        <div className="my-store">
            <i class='bx bx-store'></i>
            <h5> Store</h5>
            </div>
        <div className="support">
            <i class='bx bx-comment-dots'></i>
            <h5>Support</h5>
            </div>
        <div className="wishlist">
            <i class='bx bx-heart'></i>
            <h5>Wishlist</h5>
            </div>
        <div className="cart">
            <i class='bx bx-cart' ></i>
            <h5>Cart</h5>
            </div>
    </div>
</div>
)
}

export default header