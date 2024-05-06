import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FirstComponent from '../menuComponents/FirstComponent';
import OurBlog from '../components/OurBlog';
export default function MainNews() {
  return (
    <>
    <Header />
    <FirstComponent titel={'Blog'} pageName={'Blog'}/>
    <OurBlog />
    <OurBlog />
    <Footer />
    
      
    </>
  )
}
