import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstComponent(props) {
  return (
    <>
       <div className="subheader section-padding">
        <div className="subheader-overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="page-title text-center">
                        <h1 className="text-custom-white">{props.titel}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="subheader-bottom">
                        <ul className="custom-flex custom-breadcrumb">
                            <li className="anchor-animation second bebas">
                                <Link to="/" className="text-brown">Home</Link>
                            </li>
                            <li className="bebas active">
                                <Link to="">{props.pageName}</Link>
                            </li>
                        </ul>
                        <div className="breadcrumb-right socialize anchor-animation second">
                            <Link to="" className="bebas text-brown">Socialize <i className="bi bi-arrow-up"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="floating-social">
            <ul className="custom">
                <li className="anchor-animation second">
                    <Link to="/" className="text-brown"><i className="bi bi-facebook"></i></Link>
                </li>
                <li className="anchor-animation second">
                    <Link to="/" className="text-brown"><i className="bi bi-twitter"></i></Link>
                </li>
                <li className="anchor-animation second">
                    <Link to="https://www.instagram.com/sushilife_lyon/" target='_black' className="text-brown"><i className="bi bi-instagram"></i></Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
