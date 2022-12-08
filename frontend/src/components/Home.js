import React from "react";
import "./Home.css";
import Product from "./Product";
import Hero from "../assets/hero-section.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        {/*1112 x 444.8 */}
        <img className="home__image" src={Hero} alt="background" />
        <div className="home__row">
        <Product />
        <Product />
        <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          
        </div>
        <div className="home__row">
          <Product />
          {/*  */}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
