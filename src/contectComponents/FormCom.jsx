import React from 'react';
import Footer from '../components/Footer';


export default function FormCom() {
  return (
    <>
     <section className="contact-us">
        <div className="container-fluid no-padding">
            <div className="row no-gutters">
                <div className="col-lg-6">
                    <div className="full-height full-map">
                        <span className="cordinate building-detail"></span>
                        <div id="mapww" className="mapboxgl-map map-canvas full-height"></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-right-side normal-bg section-padding">
                        <div className="custom-container">
                            <div className="contact-form">
                                <h4 className="text-custom-white">Get in touch</h4>
                                <form className="form-style-2 mf_form_validate ajax_submit" action="sendmail.php" method="post" encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" name="name" autoComplete="off"  className="form-control form-control-custom" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="email" name="email" autoComplete="off"  className="form-control form-control-custom" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" name="phone" autoComplete="off"  className="form-control form-control-custom" placeholder="Phone No." />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" name="subject" autoComplete="off"  className="form-control form-control-custom" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-12 mb-xl-20">
                                            <div className="form-group">
                                                <textarea rows="5" name="message" autoComplete="off"  className="form-control form-control-custom" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="theme-btn btn-style-2">Submit<span></span></button>
                                        </div>
                                        <div className="col-12">
                                            <div className="server_response w-100"></div>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
      
    </>
  )
}
