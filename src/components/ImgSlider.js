import React from "react";
import styles from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ImgSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
  };

  return (
    <Container>
      <Carousel {...settings}>
        <Slide>
          <Link to="/home">
            <img src="/img/slider-badag.jpg" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link to="/home">
            <img src="/img/slider-badging.jpg" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link to="/home">
            <img src="/img/slider-scale.jpg" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link to="/home">
            <img src="/img/slider-scales.jpg" alt="" />
          </Link>
        </Slide>
      </Carousel>
    </Container>
  );
};

export default ImgSlider;

const Container = styles.section`
padding-top: 30px;
`;
const Slide = styles.div``;
const Carousel = styles(Slider)`
.slick-dots {
  bottom:-33px;
}
& > button {
  opacity: 0;
  height: 100%;
  width: 5vw;
  z-index: 1;
  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }
}
ul li button {
  &:before {
    font-size: 10px;
    color: rgb(150, 158, 171);
  }
}
li.slick-active button:before {
  color: white;
}

.slick-arrow {
    z-index: 1;
    opacity: 0;
    height: 100%;
    width: 50px;
}

.slick-next {
    right: 0;
    &:hover {
        opacity: 1;
    }
}

.slick-prev {
    left: 0;
    &:hover {
        opacity: 1;
    }
}
div {
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    a {
        display:inline-block;
        margin: 0 5px;
        border:none;
        outline:none;
        
        @media and (max-width:940px) {
            padding: 0 2px;
        }

        img {
            width: 100%;
            border: 4px solid rgba(219,219,219,0.3);
            border-radius: 5px;

            &:hover {
                border: 4px solid rgba(219,219,219,0.8);
            }
        }
    }
}
`;
