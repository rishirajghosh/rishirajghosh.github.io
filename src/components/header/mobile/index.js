import React from 'react';
import './mobile.css'
import { useState } from 'react'

function Mobile() {
  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)


  return <div className="mobile">
    <div>
      <nav className={fix ? 'navbar fixed' : "mobile-option"}>
        <table>

          <tr><td>
            <div className="mobile-option">
              <a href="#work">
                <i class="fi-rr-laptop option-icon"></i>Work
              </a>
            </div>
          </td>
            <td>
              <div className="mobile-option">
                <a href="#projects" >
                  <i class="fi-rr-edit-alt option-icon"></i>Projects
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="mobile-option">
                <a href="#skills">
                  <i class="fi-rr-briefcase option-icon"></i>Skills
                </a>
              </div>
            </td>
            <td>
              <div className="mobile-option">
                <a href="#contact">
                  <i class="fi fi-rr-user option-icon"></i>Contact
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="mobile-option">
                <a href="https://drive.google.com/file/d/1pp-3dozh0dvVFOq1P0cIhuzAMlQRTYiC/view?usp=share_link">~Resume
                </a>
              </div>
            </td>
            <td>
              <div className="logo">
                <h7>      |  </h7><a href="https://rishirajghosh.github.io/"><img style={{ width: 45, height: 30 }} src={require("../../../assets/rishi.png")} alt={"Rishiraj Ghosh"} /></a></div>
            </td>
          </tr>

        </table>
      </nav>
    </div >
  </div >;
}

export default Mobile;