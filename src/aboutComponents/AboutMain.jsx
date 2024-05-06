import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import ChefMember from './ChefMember';
import FirstComponent from '../menuComponents/FirstComponent';

export default function AboutMain(props) {
  return (
    <>
        <Header/>
        <FirstComponent titel={'About Us'} pageName={'About Us'}/>
        <About />
        <Offers />
        <ChefMember />
        <Footer />
      
    </>
  )
}
