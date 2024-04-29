import React, { useState } from "react";
import Clock from "./Clock";
import data from "../data/data.json";
import "./Dashboard.css";
import Navbar from "./Navbar";
import crossicon from "../assets/crossicon.png";
import download from "../assets/download.png";

const Dashboard = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ x: 0, y: 0 });

  const handleRightClick = (e) => {
    e.preventDefault();
    setOptionsVisible(true);
    setOptionsPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCloseOptions = () => {
    setOptionsVisible(false);
  };

  return (
    <>
      <Navbar />
      <Clock />
      <div className="dashboard-container" onContextMenu={handleRightClick}>
        <div className="apps-container">
          {data.apps.map((app) => (
            <div key={app.id} className="app">
              <img src={app.icon} alt={app.name} />
            </div>
          ))}
        </div>
        {optionsVisible && (
          <div
            className="options-menu"
            style={{ top: optionsPosition.y, left: optionsPosition.x }}
            onClick={handleCloseOptions}
          >
            <img src={crossicon} alt="" className="cross" />
            <ul className="sidebar-options">
              {data.options.map((option) => (
                <li className="sidebar-option" key={option.id}>
                  <img src={option.img} alt="" />
                  {option.name}
                  {option.subOptions && (
                    <ul>
                      {option.subOptions.map((subOption) => (
                        <li key={subOption.id}>{subOption.name}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <img src={download} alt="" className="hello-img" />
    </>
  );
};

export default Dashboard;
