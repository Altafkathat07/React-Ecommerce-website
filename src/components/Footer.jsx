import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footerimg from '../assets/images/footer-bottom-img.png';
import Footerimg2 from '../assets/images/footerimg.jpg';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <>
    <footer className="footer">
        <div className="container-fluid no-padding">
            <div className="row no-gutters">
                <div className="col-lg-6 px-0 mx-0">
                    <div className="footer-left-side normal-bg custom-container">
                        <div className="section-padding full-height">
                            <div className="row mb-xl-80">
                                <div className="col-sm-6">
                                    <div className="footer-box mb-xs-80">
                                        <div className="ft-header">
                                            <h5 className="text-custom-white">FIND OUR RESTAURANTS</h5>
                                        </div>
                                        <div className="ft-info mb-xl-20">
                                            <Link to="/" className="text-custom-white fs-14">1510 Seifert Dr, </Link>
                                            <Link to="/" className="text-custom-white fs-14">Poplar Bluff, MO, 63901</Link>
                                            <Link to="/" className="text-custom-white fs-14">(573) 686-3703</Link>
                                        </div>
                                        <div className="ft-info mb-xl-20">
                                            <Link to="/" className="text-custom-white fs-14">1510 Seifert Dr, </Link>
                                            <Link to="/" className="text-custom-white fs-14">Poplar Bluff, MO, 63901</Link>
                                            <Link to="/" className="text-custom-white fs-14">(573) 686-3703</Link>
                                        </div>
                                        <div className="ft-info mb-xl-20">
                                            <Link to="/" className="text-custom-white fs-14">1510 Seifert Dr, </Link>
                                            <Link to="/" className="text-custom-white fs-14">Poplar Bluff, MO, 63901</Link>
                                            <Link to="/" className="text-custom-white fs-14">(573) 686-3703</Link>
                                        </div>
                                        <div className="ft-info">
                                            <Link to="/" className="text-custom-white fs-14">1510 Seifert Dr, </Link>
                                            <Link to="/" className="text-custom-white fs-14">Poplar Bluff, MO, 63901</Link>
                                            <Link to="/" className="text-custom-white fs-14">(573) 686-3703</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="footer-box">
                                        <div className="ft-header">
                                            <h5 className="text-custom-white">WORKING HOURS</h5>
                                        </div>
                                        <div className="week-info mb-xl-20">
                                            <h6 className="text-custom-white mb-2 fs-18">MONDAY-TUSEDAY</h6>
                                            <p className="text-custom-white no-margin">11:30-14:00 | 18:30-00:00</p>
                                        </div>
                                        <div className="week-info mb-xl-20">
                                            <h6 className="text-custom-white mb-2 fs-18">WEDNESDAY </h6>
                                            <p className="text-custom-white no-margin">Farm</p>
                                        </div>
                                        <div className="week-info mb-xl-20">
                                            <h6 className="text-custom-white mb-2 fs-18">THURSDAY-SUNDAY </h6>
                                            <p className="text-custom-white no-margin">11:30-14:00 | 18:30-00:00</p>
                                        </div>
                                        <div className="ft-social-info">
                                            <h6 className="text-custom-white no-margin fs-18">FOLLOW US: </h6>
                                            <Link to="/" className="text-custom-white"><i className="bi bi-facebook"></i></Link>
                                            <Link to="/" className="text-custom-white"><i className="bi bi-twitter"></i></Link>
                                            <Link to="https://www.instagram.com/sushilife_lyon/" target='blank' className="text-custom-white"><i className="bi bi-instagram"></i></Link>
                                            <Link to="/" className="text-custom-white"><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                        <div className="ft-social-info mt-3">
                                            <h6 className="text-custom-white no-margin fs-18">Location:</h6>
                                            <Link to="https://www.google.com/maps/place/%F0%9F%A5%87+Sushi+Life+%7C+Villeurbanne+%7C+Lyon/@45.7597096,4.8929778,15z/data=!4m6!3m5!1s0x47f4c1ce7dc331b9:0xd4247c3562ead231!8m2!3d45.7597096!4d4.8929778!16s%2Fg%2F11r71q82c4?entry=ttu" target='blank' className="text-custom-white"><i class="bi bi-geo-alt"></i>21 Rue Léon Blum 69100 Villeurbanne</Link>
                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-sm-6 align-self-end mb-xs-40">
                                        <p className="text-custom-white no-margin">Created with <i className="fal fa-heart"></i> by <Link to="/" className="text-light-blue">Slidesigma</Link></p>
                                    </div>
                                    <div className="col-sm-6 px-0 mx-0">
                                        <div className="ft-logo">
                                            <img src={Footerimg} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-0 mx-0">
                    <div className="ft-img full-height">
                        <img src={Footerimg2} className="image-fit" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div id="back-top" >
        <button className='backTopBtn'><i className="bi bi-arrow-up text-light" onClick={scrollToTop}></i></button>
    </div>
      
    </>
  )
}
