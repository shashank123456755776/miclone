import React from "react";
import "../styles/starProduct.css";

const StarProducts = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div className="starProduct-1 starProduct-box1">
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="img" />
        </a>
      </div>
      <div className="starProduct-box2">
        <a href={starProduct[1].url}>
          <img src={starProduct[1].image} alt="img" />
        </a>
        <a href={starProduct[2].url}>
          <img src={starProduct[2].image} alt="img" />
        </a>
        <a className="starProduct-last" href={starProduct[3].url}>
          <img src={starProduct[3].image} alt="img" />
        </a>
      </div>
    </div>
  );
};

export default StarProducts;
