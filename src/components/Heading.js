import React from "react";
import "../styles/heading.css";

const Heading = ({ heading }) => {
  return (
    <div className="heading">
      <div></div>
      <p>{heading}</p>
      <div></div>
    </div>
  );
};

export default Heading;
