import React from "react";
import video3 from "../assets/video/v4.mp4";
import { Link } from "react-router-dom";

export default function VideoSection() {
  return (
    <>
        <section className="full-video-sec">
        <div className="container-fluid no-padding px-0 mx-0">
            <div className="row">
                <div className="col-12">
                    <div className="video-box p-relative">
                        <video
                        // playsinline="playsinline"
                        className="jarallax"
                        controls={false}
                        autoPlay
                        muted
                        >
                         <source src={video3} type="video/mp4" />
                        </video>
                        <div className="overlay overlay-bg-black"></div>
                        <div className="transform-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-header">
                                            <div className="section-heading">
                                                <h3 className="text-custom-white fw-700">Our Video</h3>
                                            </div>
                                            <div className="section-description">
                                                <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                <Link to="menu.html" className="theme-btn btn-style-2">View More<span></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
