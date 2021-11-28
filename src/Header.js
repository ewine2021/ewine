import React from "react";
import "./Header.css";
import logo from "./img/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div style={{ width: "33.33vw" }}></div>
      <div className="header_center" style={{ width: "33.33vw" }}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div
        className="header_right"
        style={{ width: "33.33vw", margin: "0 10px" }}
      >

      </div>
    </div>
  );
}

export default Header;
