import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="navIcons"> 
          <a className="navLink" href="#intro" onClick={() => setMenuOpen(false)}>Home</a>
          <a className="navLink" href="#portfolio" onClick={() => setMenuOpen(false)} >Art</a>
        </div>
      
    </div>
  );
}
