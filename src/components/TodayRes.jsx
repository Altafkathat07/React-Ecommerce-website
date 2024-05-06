import React from 'react';
import Image1 from '../assets/images/plate-empty.png';
import Image2 from '../assets/images/plate-contents.png';
import Image3 from '../assets/images/dining-food-2.png';
import Image4 from '../assets/images/dining-food-1.png';
import { Link } from 'react-router-dom';

export default function TodayRes() {
  return (
    <>
        <section className="section-padding bg-light-blue recipe-sec">
        <div className="container-fluid custom-container">
            <div className="section-header">
                <div className="section-heading">
                    <h3 className="text-custom-white fw-700">Todays Recipes</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 align-self-center">
                    <div className="recipe-text first-recipe right-text mb-xs-80">
                        <h6 className="fs-16 text-custom-white">270° DEGREES BAR</h6>
                        <h4 className="text-custom-white bebas">Vegetables and Peps</h4>
                        <p className="text-custom-white">Poolside snacks, local wine and Greek meze. The ultimate summer combination.</p>
                        <Link to="/" className="theme-btn btn-style-3">View Detail<span></span></Link >
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-12">
                    <div className="recipe-design mb-sm-80">
                        <img src={Image1} className="full-width plate" alt="img" />
                        <img src={Image2} className="recipe-img default default-img" alt="img" />
                        <img src={Image3} className="recipe-img first-recipe" alt="img" />
                        <img src={Image4} className="recipe-img second-recipe" alt="img" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 align-self-center">
                    <div className="recipe-text second-recipe">
                        <h6 className="fs-16 text-custom-white">270° DEGREES BAR</h6>
                        <h4 className="text-custom-white bebas">Margherita classica</h4>
                        <p className="text-custom-white">Poolside snacks, local wine and Greek meze. The ultimate summer combination.</p>
                        <Link to="/" className="theme-btn btn-style-3">View Detail<span></span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
