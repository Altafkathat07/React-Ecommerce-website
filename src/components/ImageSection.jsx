import React from "react";
import Banner from "../assets/images/banner-food.jpg";
import Banner2 from "../assets/images/banner-1.png";
import Banner3 from "../assets/images/banner-drink.jpg";
import Banner4 from "../assets/images/banner-2.png";
import yellow from "../assets/images/yellow-star.svg";
import video1 from "../assets/video/v2.mp4";
import video2 from "../assets/video/v3.mp4";

import "../index.css";
import { Link } from "react-router-dom";

const ImageSection = () => {
  return (
    <>
      <div className="main-banner">
        <div className="container-fluid no-padding px-0 mx-0">
          <div className="row no-gutters px-0 mx-0">
            <div className="col-lg-6 px-0 mx-0">
              <div className="banner-sec">
              <video
                playsInline
                className="jarallax"
                autoPlay
                muted
                loop
                controls={false}
               >
                <source src={video2} type="video/mp4" />
              </video>
                <Link to="/" className="image-wrapper">
                  <img src={Banner} className="image-fit" alt="banner" />
                </Link>
                <div className="text-wrapper">
                  <div className="transform-center">
                    <div className="stars mb-xl-20">
                      <img src={yellow} alt="icon" />
                    </div>
                    <h4 className="text-custom-white no-margin">You Want To</h4>
                    <div className="img-wrap mb-xl-80">
                      <img src={Banner2} className="img-fluid" alt="img" />
                    </div>
                    <Link to="/" className="theme-btn btn-style-2">
                      Discover Our Beers<span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-0 mx-0">
              <div className="banner-sec">
                <video
                  // playsinline="playsinline"
                  className="jarallax"
                  autoPlay
                  muted
                  controls={false}
                >
                  <source src={video1} type="video/mp4" />
                </video>
                <Link to="/" className="image-wrapper">
                  <img src={Banner3} className="image-fit" alt="banner" />
                </Link>
                <div className="text-wrapper">
                  <div className="transform-center">
                    <div className="stars mb-xl-20">
                      <img src={yellow} alt="icon" />
                    </div>
                    <h4 className="text-custom-white no-margin">You Want To</h4>
                    <div className="img-wrap mb-xl-80">
                      <img src={Banner4} className="img-fluid" alt="img" />
                    </div>
                    <Link to="/" className="theme-btn btn-style-2">
                      Discover Our Menu<span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
