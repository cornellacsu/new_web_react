import React from "react";
import {Palette} from 'react-palette';
import "./Sponsors.css";

function SponsorCard({ link, img, imgName}) {
  return ( imgName === "blackstone" ?
  <Palette src={img}>
  {({ data, loading, error }) => (
    <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
      {/* what does this actually do? How do I make the box around blackstone not white.. */}
        <div id = "blackstone" class="white-container-sponsors">
        <a href={link}>
            <img
                src={img}
                alt={imgName}
                className="d-inline-block align-text-top">
            </img>
        </a>
        </div>
    </div>
  )}
</Palette> :

<Palette src={img}>
{({ data, loading, error }) => (
    <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
        <div class="white-container-sponsors">
        <a href={link}>
            <img
                src={img}
                alt={imgName}
                className="d-inline-block align-text-top">
            </img>
        </a>
        </div>
    </div>
)}
</Palette>
  )
}

export default SponsorCard;