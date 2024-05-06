import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Logo1 from '../assets/images/newlogo-white.png';
// import Bottel from '../assets/images/bottle.png';
// import T from '../assets/images/t.png';
// import U from '../assets/images/u.png';
// import F from '../assets/images/f.png';
// import A from '../assets/images/a-2.png';
// import Svg from '../assets/images/stars.svg'

const Header = () => {

    const [scrolling, setScrolling] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    // let Log1 = document.querySelector('.logo-1');
    // let Log2 = document.querySelector('.logo-2');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const showMenu = () => {
        setMenuVisible(true);
    }
    




    return (
        <>

            <header className="header-style-1 style-3 ">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-navigation">
                                <div className="navigation-left">
                                    <div className="nav-inner">

                                        <div className="main-menu">
                                            <ul className={`header ${scrolling ? 'scrolling' : ''}`}>
                                                <li className="anchor-animation menu-item active" >
                                                    <Link to="/" >Home</Link>
                                                </li>
                                                <li className="anchor-animation menu-item">
                                                    <Link to="/about">About</Link>
                                                </li>
                                                <li className="anchor-animation menu-item">
                                                    <Link to="/blog">News</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`header center-logo ${scrolling ? 'scrolling' : ''}`} >
                                    <Link to="/" className="logo anchor-animation">
                                        <img src={Logo1} className="logo-1" alt="logo" />
                                        <img src={Logo1} className="logo-2" alt="logo" />
                                    </Link>
                                    <div className="hamburger-menu anchor-animation" >
                                        <div className="menu-btn">
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                            <span className="nav-dot"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="navigation-right">
                                    <div className="nav-inner">
                                        <div className="main-menu">
                                            <ul className={`header ${scrolling ? 'scrolling' : ''}`}>
                                                <li className="anchor-animation menu-item">
                                                    <Link to="/menu">Menu</Link>
                                                </li>
                                                <li className="anchor-animation menu-item">
                                                    <Link to="/reservation">Reservation</Link>
                                                </li>
                                                <li className="anchor-animation menu-item">
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="mobile-header">
                <div className="mobile-hamburger anchor-animation" onClick={showMenu}>
                    <div className="menu-btn">
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                        <span className="nav-dot"></span>
                    </div>
                </div>
                <div className="mobile-logo">
                    <Link to="/">
                        <img src={Logo1} className="image-fit" alt="logo" />
                    </Link>
                </div>
                <div className="mobile-call-btn">
                    <Link to="tel:"><i className="fal fa-phone-alt"></i></Link>
                </div>
                {menuVisible &&



                    <div className="navigation-main-inner mobNav">
                     
                        <div classname="main-menu-desktop menumob">
                            <ul>
                                <li classname="anchor-animation first-link">
                                    <Link to="/">Home</Link>
                                </li>
                                <li classname="anchor-animation active">
                                    <Link to="/about">About</Link>
                                </li>
                                <li classname="anchor-animation">
                                    <Link to="/blog">News</Link>
                                </li>
                                <li classname="anchor-animation border-right-0">
                                    <Link to="/menu">Menu</Link>
                                </li>
                                <li classname="anchor-animation">
                                    <Link to="/reservation">Reservation</Link>
                                </li>
                                <li classname="anchor-animation">
                                    <Link to="/contect">Contect</Link>
                                </li>
                            </ul>
                        </div>
                    </div>




                }
            </header>




        </>
    )
}


export default Header;
