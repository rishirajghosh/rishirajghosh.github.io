import React from 'react';
import './mobile.css'
import { useState } from 'react'

function Mobile({ isOpen, setIsOpen}) {
  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 725) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)


  return (
    <div className="mobile">
      <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div style={{ marginTop: '30px' }}>
      <nav className={fix ? 'navbar fixedmobile' : "mobile-option"}>
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
            {/* <td>
              <div className="mobile-option">
                <a href="" target="_blank" type="application/pdf" rel="noopener noreferrer">
                  <i class="fi fi-rr-document"></i>Resume
                </a>
              </div>
            </td> */}
            <td></td>
            <td style={{ display: 'flex', justifyContent: 'flex-end'}}>
              <div className="mobile-option">
                <a href="#top">
                  <img style={{ width: 22, height: 14 }} src={require("../../../assets/rishi2.png")} alt={"Rishiraj Ghosh"} />
                </a>
              </div>
            </td>
          </tr>

        </table>
      </nav>
      </div>
      </div>
    </div >
  );
}

export default Mobile;