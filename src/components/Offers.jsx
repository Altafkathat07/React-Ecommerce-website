import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Offers() {
  return (
    <>
      <div className="section-padding offer-strip normal-bg">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7 align-self-center position-relative" >
                    <div className="offer-text mb-md-40">
                        <h3 className="bebas text-custom-white orderCon">Order from Gold Nuggets and get 10% OFF</h3>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5 align-self-center">
                    <div className="btn-wrap">
                        <Link to="menu.html" className="theme-btn btn-style-2 mb-3">View Menu<span></span></Link>
                        <Link to="reservation.html" className="theme-btn mb-3">Book Now<span></span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
