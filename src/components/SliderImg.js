import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import SliderCard from "./SliderCard";

const SliderImg = ({ end }) => {
  let settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="Slider">
      <Carousel {...settings} className="Slider-slider">
        {end.map((item, index) => (
          <SliderCard
            name={item.name}
            descp={item.description}
            source={item.source}
            image={item.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  overflow: hidden;
  & > button {
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  ul li button {
    position: relative;
    bottom: 50px;
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: 100px;
  }
  .slick-next {
    right: 100px;
  }
`;

export default SliderImg;
