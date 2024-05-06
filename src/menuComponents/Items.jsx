import React from 'react';
import StyleSvg1 from '../assets/images/stars.svg';
import StyleSvg2 from '../assets/images/milk.svg';
import StyleSvg3 from '../assets/images/fish.svg';
import StyleSvg4 from '../assets/images/egg.svg';
import StyleSvg5 from '../assets/images/nuts.svg';
import { Link } from 'react-router-dom';


export default function Items(props) {
  return (
    <>
      <section className="section-padding rs-menu-style">
        <div className="container-fluid custom-container">
            <div className="section-header">
                <div className="section-heading">
                    <h3 className="text-brown fw-700">{props.title2}</h3>
                </div>
            </div>
            <div className="row mb-xl-40">
                <div className="col-12">
                    <div className="menu-heading">
                         <h5 className="bebas extra" ><span><span className="stars">
                             <img src={StyleSvg1} alt="icon" />
                         </span></span>Extra</h5>
                        <div className="btn-wrp">
                            <Link href="/" className="theme-btn btn-style-2">View all<span></span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="rs-menu-style-2">
                        <ul className="custom-flex">
                            <li>
                                <div className="proname">
                                    <p className="no-margin">Bacon</p>
                                </div>
                                <div className="proaddtional">
                                    <div className="proprice">
                                        <p className="no-margin">2,78<sup>$</sup></p>
                                    </div>
                                    <div className="proicon">
                                        <button className="small-cart"><i className="bi bi-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="hover-icon">
                                    <div className="icons p-0">
                                        <img src={StyleSvg2} data-tooltip="tooltip" title="Milk" alt="img" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="proname">
                                    <p className="no-margin">Chiken</p>
                                </div>
                                <div className="proaddtional">
                                    <div className="proprice">
                                        <p className="no-margin">2,78<sup>$</sup></p>
                                    </div>
                                    <div className="proicon">
                                        <button className="small-cart"><i className="bi bi-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="hover-icon">
                                    <div className="icons p-0">
                                        <img src={StyleSvg2} data-tooltip="tooltip" title="Milk" alt="icon" />
                                        <img src={StyleSvg3} data-tooltip="tooltip" title="Fish" alt="icon" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="proname">
                                    <p className="no-margin">Fried Bacon</p>
                                </div>
                                <div className="proaddtional">
                                    <div className="proprice">
                                        <p className="no-margin">2,78<sup>$</sup></p>
                                    </div>
                                    <div className="proicon">
                                        <button className="small-cart"><i className="bi bi-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="hover-icon">
                                    <div className="icons p-0">
                                        <img src={StyleSvg2} data-tooltip="tooltip" title="Milk" alt="icon" />
                                        <img src={StyleSvg4} data-tooltip="tooltip" title="Egg" alt="icon" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="proname">
                                    <p className="no-margin">Pizza</p>
                                </div>
                                <div className="proaddtional">
                                    <div className="proprice">
                                        <p className="no-margin">2,78<sup>$</sup></p>
                                    </div>
                                    <div className="proicon">
                                        <button className="small-cart"><i className="bi bi-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="hover-icon">
                                    <div className="icons p-0">
                                        <img src={StyleSvg2} data-tooltip="tooltip" title="Milk" alt="icon" />
                                        <img src={StyleSvg5} data-tooltip="tooltip" title="Nuts" alt="icon" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="proname">
                                    <p className="no-margin">Burger</p>
                                </div>
                                <div className="proaddtional">
                                    <div className="proprice">
                                        <p className="no-margin">2,78<sup>$</sup></p>
                                    </div>
                                    <div className="proicon">
                                        <button className="small-cart"><i className="bi bi-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="hover-icon">
                                    <div className="icons p-0">
                                        <img src={StyleSvg4} data-tooltip="tooltip" title="Egg" alt="icon" />
                                        <img src={StyleSvg3} data-tooltip="tooltip" title="Fish" alt="icon" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="proname">
                                    <p className="no-margin">Bacon</p>
                                </div>
                                <div className="proaddtional">
                                    <div className="proprice">
                                        <p className="no-margin">2,78<sup>$</sup></p>
                                    </div>
                                    <div className="proicon">
                                        <button className="small-cart"><i className="bi bi-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="hover-icon">
                                    <div className="icons p-0">
                                        <img src={StyleSvg2} data-tooltip="tooltip" title="Milk" alt="icon" />
                                        <img src={StyleSvg4} data-tooltip="tooltip" title="Egg" alt="icon" />
                                        <img src={StyleSvg3} data-tooltip="tooltip" title="Fish" alt="icon" />
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="btn-wrp">
                        <button type="button" id="loadMore2" className="loadMore-btn anchor-animation">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
