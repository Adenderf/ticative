import React from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
       <Link to='/'>
      <img className="header__logo" src={logo} alt="" />
      </Link>
      <div className="header__search">
        <input className=" header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="navName">Hello Guest</span>
          <Link to='/login'>
          <span className="navOption">Sign In</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="navOption">SignUp</span>
        </div>
        {/* <div className="header__option">
          <span className="navOption">Prime</span>
        </div> */}
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="navOption basket__quantity">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
