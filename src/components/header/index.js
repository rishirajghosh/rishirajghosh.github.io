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
          <a href="https://rishirajghosh.github.io/">
              <img style={{ width: 45, height: 30 }} src={require("../../assets/rishi2.png")} className='glow-image' alt={"Rishiraj Ghosh"} />
          </a>
          <i className="fi fi-rr-file-user" style={{ fontSize: 'smaller', color: "#363636", verticalAlign: 'middle', margin: '10px 10px 0', marginRight: '8px' }}></i>
          <p>Rishiraj Ghosh</p>
      </div>
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