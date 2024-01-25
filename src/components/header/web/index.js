import React from 'react';
import './web.css';
import { useState } from 'react'

function Web() {
  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 725) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  return <div className="web">
    <div>
      <nav className={fix ? 'navbar fixedweb' : "web-option"}>
        <table>

          <tr><td>
            <div className="web-option">
              <a href="#work">
                <i class="fi-rr-laptop option-icon"></i>Work
              </a>
            </div>
          </td>
            <td>
              <div className="web-option">
                <a href="#projects" >
                  <i class="fi-rr-edit-alt option-icon"></i>Projects
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="web-option">
                <a href="#skills">
                  <i class="fi-rr-briefcase option-icon"></i>Skills
                </a>
              </div>
            </td>
            <td>
              <div className="web-option">
                <a href="#contact">
                  <i class="fi fi-rr-user option-icon"></i>Contact
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="web-option">
                <a href="https://jmp.sh/8A2NmxS8" target="_blank" type="application/pdf" rel="noopener noreferrer">
                  <i class="fi fi-rr-document"></i>Resume
                </a>
              </div>
            </td>
            <td style={{ display: 'flex', justifyContent: 'flex-end'}}>
              <div className="web-option">
                <a href="#">
                  <img style={{ width: 40, height: 29 }} src={require("../../../assets/rishi2.png")} className='glow-image' alt={"Rishiraj Ghosh"} />
                  </a>
              </div>
            </td>
          </tr>

        </table>
      </nav>
    </div >
  </div >;
}

export default Web;