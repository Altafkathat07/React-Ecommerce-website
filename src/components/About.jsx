import React from "react";

import SushiImg1 from "../assets/images/about-01.jpg";
import SushiImg2 from "../assets/images/about-02.jpg";
import SushiImg3 from "../assets/images/about-03.jpg";
import "../index.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="section-padding aboutsec p-relative">
        <div className="container-fluid custom-container px-0 mx-0">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-left full-height">
                <div className="about-img ">
                  <img src={SushiImg1} className="about-img-first" alt="img" />

                  <img src={SushiImg2} className="about-img-second" alt="img" />

                  <img src={SushiImg3} className="about-img-third" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-right">
                <div className="section-header left-side">
                  <div className="section-heading">
                    <h3 className="text-brown fw-700">
                      PARTIE TRAITEUR EVENEMENTIEL
                    </h3>
                  </div>
                </div>
                <div className="about-desc">
                  <p className="text-light-white">
                    Sushi Life, un service traiteur sushi de premier plan,
                    propose une expérience culinaire exceptionnelle pour divers
                    événements, des fonctions corporatives aux fêtes à thème
                    pour enfants. Leurs talentueux chefs sushi créent un
                    spectacle culinaire en direct, mêlant des saveurs
                    authentiques à des visuels captivants. Le service offre des
                    options personnalisables, garantissant une expérience sur
                    mesure pour chaque occasion. Sushi Life étend également sa
                    magie à des ateliers sushi axés sur la famille, favorisant
                    la créativité et la connexion à travers des sessions
                    éducatives et divertissantes. L'histoire de Mounia, la
                    fondatrice, ajoute une touche personnelle en retracant son
                    parcours depuis une famille profondément impliquée dans la
                    planification d'événements jusqu'à la transformation réussie
                    de sa passion pour les sushis en un restaurant et un service
                    traiteur renommés. Avec un engagement envers l'excellence,
                    Sushi Life promet des moments inoubliables et des délices
                    culinaires.
                  </p>
                  <ul className="custom-flex mb-xl-20 row">
                    <li className="col-auto">
                      <i className="fal fa-phone-alt text-light-blue"></i>
                      <div className="content">
                        <h6 className="fs-18 mb-1">Phone: </h6>
                        <Link to="/" className="text-brown">
                          (+ 347) 123 4567 890
                        </Link>
                      </div>
                    </li>
                    <li className="col-auto">
                      <i className="fal fa-envelope text-light-blue"></i>
                      <div className="content">
                        <h6 className="fs-18 mb-1">Email: </h6>
                        <Link to="/" className="text-brown">
                          sushi.life69100@gmail.com
                        </Link>
                      </div>
                    </li>
                    <li className="col-auto">
                      <i className="fal fa-map-marker-alt text-light-blue"></i>
                      <div className="content">
                        <h6 className="fs-18 mb-1">Location: </h6>
                        <Link to="/" className="text-brown">
                          View Map
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <Link to="/" className="theme-btn btn-style-2">
                    Learn More...<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
