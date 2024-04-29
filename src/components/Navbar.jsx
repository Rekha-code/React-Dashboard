import React from "react";
import "./Navbar.css";
import vectorwifi from "../assets/Vectorwifi.png";
import vector from "../assets/Vector.png";
import group from "../assets/Group.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <CiSearch className="profile noti" />
      <IoMdNotificationsOutline className="profile noti" />
      <img src={vectorwifi} alt="" className="profile" />
      <img src={vector} alt="" className="profile" />
      <img src={group} alt="" className="profile" />
    </div>
  );
};

export default Navbar;
