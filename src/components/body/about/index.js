import React, { useState, useEffect } from 'react';
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import ReactTyped from "react-typed";

function About() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const image = new Image();
    image.src = require("../../../assets/pfpTransparent.png");

    image.onload = () => {
      // Once the image is loaded, update the state to trigger the fade-in effect
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">👋🏻 <ReactTyped strings={["Hi,"]} typeSpeed={40} showCursor={false}/>
          <br /> <span className="info-name"><ReactTyped strings={["I'm Rishi."]} typeSpeed={60} showCursor={false}/></span>
          <br /> <br /> <i class="fi fi-rr-circle-star" alt="bulletpoint"></i> Software Engineer
          <br /> <i class="fi fi-rr-circle-star" alt="bulletpoint"></i> Computer Science & Business at <span className="info-name2"><a href="https://umd.edu" target="_blank" rel="noopener noreferrer"><ReactTyped strings={["University of Maryland"]} typeSpeed={100} showCursor={false}/></a></span>
          <br /> <i class="fi fi-rr-circle-star" alt="bulletpoint"></i> Passionate about <span className="info-name2"><ReactTyped strings={["Full stack Software Engineering", "Distributed Systems", "Data Science", "Machine Learning", "AI", "Backend Development", "Social Good!"]} typeSpeed={110} backSpeed={20} loop={isMobile ? false : true} showCursor/></span>
        </div>
        <div className="about-photo">
          <img style={{ 
            width: 400, 
            height: 350, 
            borderRadius: 200, 
            boxShadow: "0px 10px 30px rgba(0, 0, 255, 0.3)",
            overflow: "hidden", 
            border: "2px solid blue",
            opacity: isImageLoaded ? 0.9 : 0.1,
            transition: "all 2s cubic-bezier(0.6, -0.6, 0.4, 1.7)",
          }}
            src={require("../../../assets/headshot400.jpg")}
            className="picture"
            alt="Profile"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;