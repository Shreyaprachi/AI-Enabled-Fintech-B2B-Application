import React from "react";
import HRClogo from "./Images/hrc_logo.svg";
import ABClogo from "./Images/abc_logo.svg";
import "./Header.css";

function Header() {

  return(
    <div className="header">
    <div id="header1">
      <img src={ABClogo} height={42} width={200} alt="ABClogo" />
      <p className="heading">Invoice List</p>
      </div>
      <div id="header2">
      <img src={HRClogo} height={42} width={200} alt="HRClogo" />
    </div>
    </div>
  );
}

export default Header;