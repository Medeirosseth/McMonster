import React from "react";
import "./Topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <div className="itemContainer"></div>
            MCMONSTER
          </a>
        </div>
        <h1 className="topbarname"></h1>
        <div className="right">
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span className="lineone">1</span>
            <span className="linetwo">2</span>
            <span className="linethree">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
