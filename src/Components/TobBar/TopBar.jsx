import React from "react";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="logo">inspace</span>
        <ul className="menu-items">
          <li className="menu-item">About</li>
          <li className="menu-item">Events</li>
          <li className="menu-item">Contact Us</li>
        </ul>
      </div>
      <div className="topbar-right">
        <button className="topbar-button">login</button>
      </div>
    </div>
  );
}

export default TopBar;
