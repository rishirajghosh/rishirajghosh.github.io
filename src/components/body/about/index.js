import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, my name is
          <br /> <span className="info-name"> Rishiraj Ghosh</span>.
          <br /> I'm an aspiring Software Engineer, currently studying Computer Science and Business at the University of Maryland, College Park.
        </div>
        <div className="about-photo">
          <img style={{ width: 400, height: 400 }}
            src={require("../../../assets/pfp.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;