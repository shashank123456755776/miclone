import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const Banner = ({ start }) => {
  let settings = {
    fade:true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="banner">
      <Carousel {...settings} className="Banner-slider">
        {start.map((item, index) => (
          <Wrap>
            <img src={item} alt="img" />
          </Wrap>
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

const Wrap = styled.div`
  cursor: pointer;
  img {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
