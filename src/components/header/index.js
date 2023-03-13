import React from 'react';
import { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <p><a href="https://rishirajghosh.github.io/"><img style={{ width: 45, height: 30 }} src={require("../../assets/rishi.png")} alt={"Rishiraj Ghosh"} /></a> | Rishiraj Ghosh</p></div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;