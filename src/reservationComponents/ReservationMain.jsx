import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FirstComponent from '../menuComponents/FirstComponent'
import ReservationDate from './ReservationDate';

export default function ReservationMain() {
  return (
    <>
    <Header />
    <FirstComponent titel={'Reservation'} pageName={'Reservation'}/>
    <ReservationDate />
    <Footer />
    </>
  )
}
