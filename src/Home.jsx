import React from 'react';
import './index.css';
import About from './components/About';
import Clint from './components/Clint';
import Feed from './components/Feed';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import Offers from './components/Offers';
import OurBlog from './components/OurBlog';
import TodayMenu from './components/TodayMenu';
import TodayRes from './components/TodayRes';
import VideoSection from './components/VideoSection';

export default function Home() {
  return (
    <>
       <Feed />
      <About />
      <ImageSlider />
      <TodayMenu titel="Menu" button1="Starters & Sides" button2="Sushi Life" button3="Tataki" button4="Chirashi" />
      <VideoSection />
      <Offers />
      <Clint />
      <TodayRes />
      <OurBlog />
      <Footer />
      
    </>
  )
}
