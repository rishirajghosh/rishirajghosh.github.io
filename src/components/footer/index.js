import React from "react";
import "./footer.css";
function Footer() {
  return (
  <div className="footer">
    <div class="myDiv">Made w/ <i class="fi fi-rr-circle-heart"></i> by</div>
    <div class="myDiv">Rishiraj Ghosh <span class="myBig">©</span> 2025</div>
    <div class="arrow"><a href="#top" style={{ textDecoration: "none", color: "inherit" }}>
      <i class="fi fi-rr-arrow-circle-up"></i></a>
    </div>
  </div>
  );
}

export default Footer;