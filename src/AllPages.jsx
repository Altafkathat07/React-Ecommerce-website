import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Contect from './Contect';
import MenuContent from './menuLists/MenuContent';
import AboutPage from './AboutPage';
import ReservationMain from './reservationComponents/ReservationMain'
import MainNews from './NewsComponents/MainNews';

export default function AllPages() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<MainNews />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<ReservationMain />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/menulists" element={<MenuContent/>} />
    </Routes>
    
    </BrowserRouter>
  )
}
