import React from 'react';
import Header from '../components/Header';
import FirstComponent from './FirstComponent';


export default function Main(props) {
  return (
    <>
    <Header/>
   <FirstComponent titel={'Menu'} pageName={'Menu'}/>
    </>
  )
}
