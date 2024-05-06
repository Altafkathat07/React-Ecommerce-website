import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import FoodImg1 from '../assets/images/food.jpg';
import FoodImg2 from '../assets/images/drinks.jpg';
import FoodImg3 from '../assets/images/food2.jpg';
import FoodImg4 from '../assets/images/events.jpg';

export default function ImageSlider() {


  return (
    <section className="products-sec">
      <div className="container-fluid no-padding px-0 mx-0">
        <div className="row">
          <div className="col-12">
            <div className="auto-scroll-slider product-slider" >
              <div className="slide-item col-lg-4 col-md-6 col-sm-12">
                <div className="product-box p-relative">
                  <Link to="/" className="product-wrap">
                    <div className="img-box">
                      <img src={FoodImg1} className="image-fit" alt="img" />
                    </div>
                    <div className="product-caption text-center">
                      <div className="transform-center">
                        <h4 className="text-custom-white">EAT</h4>
                        <p className="text-custom-white fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      </div>
                    </div>
                    <div className="btn-wrap">
                      <span className="theme-btn btn-style-2">Know More<span></span></span>
                    </div>
                  </Link >
                </div>
              </div>
              <div className="slide-item col-lg-4 col-md-6 col-sm-12">
                <div className="product-box p-relative">
                  <Link to="/" className="product-wrap">
                    <div className="img-box">
                      <img src={FoodImg2} className="image-fit" alt="img" />
                    </div>
                    <div className="product-caption text-center">
                      <div className="transform-center">
                        <h4 className="text-custom-white">DRINKS</h4>
                        <p className="text-custom-white fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      </div>
                    </div>
                    <div className="btn-wrap">
                      <span className="theme-btn btn-style-2">Know More<span></span></span>
                    </div>
                  </Link >
                </div>
              </div>
              <div className="slide-item col-lg-4 col-md-6 col-sm-12">
                <div className="product-box p-relative">
                  <Link to="/" className="product-wrap">
                    <div className="img-box">
                      <img src={FoodImg3} className="image-fit" alt="img" />
                    </div>
                    <div className="product-caption text-center">
                      <div className="transform-center">
                        <h4 className="text-custom-white">SNAKS</h4>
                        <p className="text-custom-white fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      </div>
                    </div>
                    <div className="btn-wrap">
                      <span className="theme-btn btn-style-2">Know More<span></span></span>
                    </div>
                  </Link >
                </div>
              </div>
              <div className="slide-item col-lg-4 col-md-6 col-sm-12">
                <div className="product-box p-relative">
                  <Link to="/" className="product-wrap">
                    <div className="img-box">
                      <img src={FoodImg4} className="image-fit" alt="img" />
                    </div>
                    <div className="product-caption text-center">
                      <div className="transform-center">
                        <h4 className="text-custom-white">EVENTS</h4>
                        <p className="text-custom-white fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      </div>
                    </div>
                    <div className="btn-wrap">
                      <span className="theme-btn btn-style-2">Know More<span></span></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

