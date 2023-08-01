import React from "react";

const Offer = ({ url, image }) => {
  return (
    <div>
      <a href={url}>
        <img src={image} alt="img" />
      </a>
    </div>
  );
};

export default Offer;
