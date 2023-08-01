import React from "react";

const ProductReviewCard = ({ image, index, price, name, review }) => {
  return (
    <div className="ProductReviewCard">
        <img src={image} alt="img" />
        <h3>{review}</h3>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
