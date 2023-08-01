import React from "react";
import "../styles/SliderCard.css";

const SliderCard = ({ name, descp, source, image }) => {
  return (
    <div className="Slider-card">
      <img src={image} alt="img" />
      <h3>{name}</h3>
      <p className="p1">{descp}</p>
      <p className="p2">{source}</p>
      <p className="p3">Read More</p>
    </div>
  );
};

export default SliderCard;
