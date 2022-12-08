import React from "react";
import "./Product.css";
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';
const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p> Art 1</p>
        <p className="product__price">
          <small>₱</small>
          <strong>100</strong>
        </p>
        <div className="artist__name">
        <Link to='/profile'>
          <p>Artist Name</p>
        </Link>
        </div>
      </div>
      <img src={Logo} alt="" />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
