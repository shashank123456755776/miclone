import React from "react";
import Offer from "./Offer";
import "../styles/offers.css"

const Offers = ({ offer }) => {
  return (
    <div className="offers-div">
      {offer.map((item, index) => (
        <Offer key={index} url={item.url} image={item.image} />
      ))}
    </div>
  );
};

export default Offers;
