import React from 'react';
import MenuImg1 from '../assets/images/img1.jpg';
import MenuImg2 from '../assets/images/img2.jpg';
import MenuImg3 from '../assets/images/img3.jpg';
import MenuImg4 from '../assets/images/img4.jpg';
import MenuImg5 from '../assets/images/img5.jpg';
import { Link } from 'react-router-dom';
export default function ImageMenu() {
  return (
    <>
      <section className="full-width-menu">
        <div className="container-fluid no-padding">
            <div className="section-header">
                <div className="section-heading">
                    <h3 className="text-brown fw-700">Menu Style 4</h3>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-xl-4 col-md-6 px-0 mx-0">
                    <div className="menu-wrapper">
                        <img src={MenuImg1} className="image-fit" alt="img" />
                        <div className="overlay overlay-bg-black"></div>
                        <div className="top-sec">
                            <h6 className="text-custom-white bebas">Pasta</h6>
                            <h3 className="text-custom-white bebas">French Pasta</h3>
                        </div>
                        <div className="bottm-sec">
                            <p className="text-custom-white">Quay’s Benchmark pairing is a celebration of local and international wines that have set the standard</p>
                            <Link to="/" className="theme-btn btn-style-2">Read More <span></span></Link >
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 px-0 mx-0">
                    <div className="menu-wrapper">
                        <img src={MenuImg2} className="image-fit" alt="img" />
                        <div className="overlay overlay-bg-black"></div>
                        <div className="top-sec">
                            <h6 className="text-custom-white bebas">Pizza</h6>
                            <h3 className="text-custom-white bebas">Margherita</h3>
                        </div>
                        <div className="bottm-sec">
                            <p className="text-custom-white">Quay’s Benchmark pairing is a celebration of local and international wines that have set the standard for quality and prestige</p>
                            <Link to="/" className="theme-btn btn-style-2">Read More <span></span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 px-0 mx-0">
                    <div className="menu-wrapper">
                        <img src={MenuImg3} className="image-fit" alt="img" />
                        <div className="overlay overlay-bg-black"></div>
                        <div className="top-sec">
                            <h6 className="text-custom-white bebas">Peproni</h6>
                            <h3 className="text-custom-white bebas">Chicken Peproni</h3>
                        </div>
                        <div className="bottm-sec">
                            <p className="text-custom-white">Quay’s Benchmark pairing is a celebration of local and international wines that have set the standard</p>
                            <Link to="/" className="theme-btn btn-style-2">Read More <span></span></Link >
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 px-0 mx-0">
                    <div className="menu-wrapper">
                        <img src={MenuImg4} className="image-fit" alt="img" />
                        <div className="overlay overlay-bg-black"></div>
                        <div className="top-sec">
                            <h6 className="text-custom-white bebas">Burger</h6>
                            <h3 className="text-custom-white bebas">Hammer Cheese</h3>
                        </div>
                        <div className="bottm-sec">
                            <p className="text-custom-white">Quay’s Benchmark pairing is a celebration of local and international wines that have set the standard</p>
                            <Link to="/" className="theme-btn btn-style-2">Read More <span></span></Link >
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 px-0 mx-0">
                    <div className="menu-wrapper">
                        <img src={MenuImg5} className="image-fit" alt="img" />
                        <div className="overlay overlay-bg-black"></div>
                        <div className="top-sec">
                            <h6 className="text-custom-white bebas">Pasta</h6>
                            <h3 className="text-custom-white bebas">Spicy Cheese</h3>
                        </div>
                        <div className="bottm-sec">
                            <p className="text-custom-white">Quay’s Benchmark pairing is a celebration of local and international wines that have set the standard for quality and prestige</p>
                            <Link to="/" className="theme-btn btn-style-2">Read More <span></span></Link >
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 px-0 mx-0">
                    <div className="menu-wrapper wraptext">
                        <a href="blog-details.html" className="text-dark td-none bebas">continue reading our news <u>Here</u></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
