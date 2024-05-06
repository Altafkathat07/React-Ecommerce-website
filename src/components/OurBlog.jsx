import React from 'react';
import Blogimg1 from '../assets/images/b-h1.jpg';
import Blogimg2 from '../assets/images/admin-1-40x40.jpg';
import Blogimg3 from '../assets/images/b-h2.jpg';
import Blogimg4 from '../assets/images/admin-2-40x40.jpg';
import Blogimg5 from '../assets/images/b-h3.jpg';
import Blogimg6 from '../assets/images/admin-3-40x40.jpg';
import Blogimg7 from '../assets/images/b-h1.jpg';
import Blogimg8 from '../assets/images/admin-1-40x40.jpg';
import { Link } from 'react-router-dom';

export default function OurBlog() {
  return (
    <>
          <section className="section-padding our_articles">
        <div className="container-fluid custom-container">
            <div className="section-header">
                <div className="section-heading">
                    <h3 className="text-brown fw-700">Our Blogs</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="blog-slider ">
                        <div className="slide-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        
                            <article className="post">
                                <div className="post-wrapper mb-sm-30">
                                    <div className="post-img">
                                        <Link to="blog-details.html">
                                            <img src={Blogimg1} className="image-fit" alt="blog-img" />
                                        </Link >
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-heading">
                                            <h2><Link to="blog-details.html">Home to get your home delevery ?</Link ></h2>
                                        </div>
                                        <div className="post-data">
                                            <div className="post-date mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">16 March 2022</Link >
                                            </div>
                                            <div className="post-categories mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Spices</Link >
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Drinks</Link >
                                            </div>
                                        </div>
                                        <div className="post-description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-author">
                                                <div className="author-img">
                                                    <Link to="blog-details.html">
                                                        <img src={Blogimg2} className="rounded-circle image-fit" alt="author" />
                                                    </Link >
                                                </div>
                                                <span><Link to="blog-details.html" className="text-brown fs-16 bebas td-none text-secondary">Hazma Shatela</Link ></span>
                                            </div>
                                            <div className="post-action">
                                                <Link to="blog-details.html" className="theme-btn btn-style-2">Read More <span></span></Link >
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                          
                        </div>
                        <div className="slide-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          
                            <article className="post">
                                <div className="post-wrapper mb-sm-30">
                                    <div className="post-img">
                                        <Link to="blog-details.html">
                                            <img src={Blogimg3} className="image-fit" alt="blog-img" />
                                        </Link >
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-heading">
                                            <h2><Link to="blog-details.html">Recieved first day first reservation</Link ></h2>
                                        </div>
                                        <div className="post-data">
                                            <div className="post-date mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">16 March 2022</Link >
                                            </div>
                                            <div className="post-categories mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Breakfast</Link >
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Food</Link >
                                            </div>
                                        </div>
                                        <div className="post-description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-author">
                                                <div className="author-img">
                                                    <Link to="blog-details.html">
                                                        <img src={Blogimg4} className="rounded-circle image-fit" alt="author" />
                                                    </Link >
                                                </div>
                                                <span><Link to="blog-details.html" className="text-brown fs-16 bebas td-none text-secondary">Hazma Shatela</Link ></span>
                                            </div>
                                            <div className="post-action">
                                                <Link to="blog-details.html" className="theme-btn btn-style-2">Read More <span></span></Link >
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        
                        </div>
                        <div className="slide-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      
                            <article className="post">
                                <div className="post-wrapper mb-sm-30">
                                    <div className="post-img">
                                        <Link to="blog-details.html">
                                            <img src={Blogimg5} className="image-fit" alt="blog-img" />
                                        </Link >
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-heading">
                                            <h2><Link to="blog-details.html">Restaurant welcome day meetup</Link ></h2>
                                        </div>
                                        <div className="post-data">
                                            <div className="post-date mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">16 March 2022</Link >
                                            </div>
                                            <div className="post-categories mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Food</Link >
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Drinks</Link >
                                            </div>
                                        </div>
                                        <div className="post-description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-author">
                                                <div className="author-img">
                                                    <Link to="blog-details.html">
                                                        <img src={Blogimg6} className="rounded-circle image-fit" alt="author" />
                                                    </Link >
                                                </div>
                                                <span><Link to="blog-details.html" className="text-brown fs-16 bebas td-none text-secondary">Hazma Shatela</Link ></span>
                                            </div>
                                            <div className="post-action">
                                                <Link to="blog-details.html" className="theme-btn btn-style-2">Read More <span></span></Link >
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        
                        </div>
                        <div className="slide-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                         
                            <article className="post">
                                <div className="post-wrapper mb-sm-30">
                                    <div className="post-img">
                                        <Link to="blog-details.html">
                                            <img src={Blogimg7} className="image-fit" alt="blog-img" />
                                        </Link>
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-heading">
                                            <h2><Link to="blog-details.html">Recieved first day first reservation</Link ></h2>
                                        </div>
                                        <div className="post-data">
                                            <div className="post-date mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">16 March 2022</Link >
                                            </div>
                                            <div className="post-categories mb-xl-20">
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Food</Link >
                                                <Link to="blog-details.html" className="text-brown bebas fs-16">Drinks</Link >
                                            </div>
                                        </div>
                                        <div className="post-description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-author">
                                                <div className="author-img">
                                                    <Link to="blog-details.html">
                                                        <img src={Blogimg8} className="rounded-circle image-fit" alt="author" />
                                                    </Link >
                                                </div>
                                                <span><Link to="blog-details.html" className="text-brown fs-16 bebas td-none text-secondary">Hazma Shatela</Link ></span>
                                            </div>
                                            <div className="post-action">
                                                <Link to="blog-details.html" className="theme-btn btn-style-2">Read More <span></span></Link >
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
