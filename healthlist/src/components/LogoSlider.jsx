import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/Ngo5.png";
import logo1 from "../images/Ngo1.jpeg";
import logo2 from "../images/Ngo1.jpeg";
import logo3 from "../images/Ngo3.png";
import logo4 from "../images/Ngo4.png";

class LogoSlider extends Component {
  render() {
    const logos = [logo, logo1, logo2, logo3, logo4];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div className="home-logoSlider-mainContainer">
        <h2 className="heading">
          <u>NGOs We Support</u>
        </h2>
        <Slider {...settings}>
          {logos.map((logoSrc, index) => (
            <div className="home-logoSlider-container" key={index}>
              <img src={logoSrc} alt={`Logo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default LogoSlider;
