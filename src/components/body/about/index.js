import React, { useState, useEffect } from 'react';
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import ReactTyped from "react-typed";

function About() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
          <br /> <br /> <i class="fi fi-rr-circle-star" alt="bulletpoint"></i> An aspiring Software Engineer, currently a senior studying Computer Science & Business at the <span className="info-name2"><a href="https://umd.edu" target="_blank" rel="noopener noreferrer"><ReactTyped strings={["University of Maryland"]} typeSpeed={100} showCursor={false}/></a></span>
          <br /> <i class="fi fi-rr-circle-star" alt="bulletpoint"></i> Passionate about <span className="info-name2"><ReactTyped strings={["Distributed Systems", "Data Science", "Machine Learning", "Backend Development", "Full-stack Web Design", "Social Good!"]} typeSpeed={110} backSpeed={20} loop showCursor/></span>
        </div>
        <div className="about-photo">
          <img style={{ 
            width: 400, 
            height: 400, 
            borderRadius: 150 / 2, 
            overflow: "hidden", 
            borderWidth: 3, 
            borderColor: "blue",
            opacity: isImageLoaded ? 1 : 0,
            transition: "opacity 3s ease-in-out", 
          }}
            src={require("../../../assets/pfpTransparent.png")}
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