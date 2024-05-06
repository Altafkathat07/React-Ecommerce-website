import React from 'react';
import Main from './menuComponents/Main';
import MenuList from './menuComponents/MenuList';
import ImageMenu from './menuComponents/ImageMenu';
import Items from './menuComponents/Items';
import Capital from './menuComponents/Capital';
import Footer from './components/Footer';



export default function Menu() {
  return (
    <>
     <Main/>
     <MenuList />
     <ImageMenu />
     <Items title2="Menu Style 2"/>
     <Capital />
     <Footer />
    </>
  )
}
