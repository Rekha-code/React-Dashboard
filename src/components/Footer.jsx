import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="file">
          <button className="btn-file">File</button>
          <img src={logo} alt="" className="img-data " />
        </div>
      </div>
    </>
  );
};

export default Footer;
