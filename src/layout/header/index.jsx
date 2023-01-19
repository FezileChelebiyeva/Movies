import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link>Movie App</Link>
          </div>
          <div className="user">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
