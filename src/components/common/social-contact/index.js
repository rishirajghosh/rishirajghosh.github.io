import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target={index !== data.length - 1 ? "_blank" : "_self"}
          rel={index !== data.length - 1 ? "noopener noreferrer" : undefined}
        >
          {/*<div className="glow-container">
              <img src={item.icon} className={`${index !== data.length - 1 ? 'glow-image' : 'glow-image2'}`} alt={item.platform} />
            </div> */}
        </a>
      ))}
    </div>
  );
}

export default SocialContact;