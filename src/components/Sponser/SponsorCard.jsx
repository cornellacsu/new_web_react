import React from "react";
import "./Sponsors.css";

function SponsorCard({ link, img, imgName, width}) {
  return (
      <a href={link}>
        <img
          src={img}
          alt={imgName}
          width= {width}
          className="d-inline-block align-text-top"></img>
      </a>
  )
}

export default SponsorCard;