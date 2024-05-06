import React from 'react';
import MenuLists from './MenuLists';
import MenuLists3 from './MenuLists3';
import MenuLists4 from './MenuLists4';
import MenuLists6 from './MenuLists6';
import MenuLists7 from './MenuLists7';
import MenuLists8 from './MenuLists8';
import MenuLists9 from './MenuLists9';
// import Main from '../menuComponents/Main';
// import Footer from '../components/Footer';

export default function MenuContent() {
  return (
    <>
    {/* <Main/> */}
    <div className="container">
     <MenuLists titel="Individuel" button1="SALMON ROLL(x6)" button2="MAKI(x6)" button3="SNOW ROLL(x6)" button4="MAKI lIGHT(x6)" />
    </div>
    <div className="container">
     <MenuLists3 titel="Solo Life" button1="CALIFORNIA LIFE" button2="CRISPY LIFE" button3="SASHIMI TATAKI LIFE" button4="YAKITORI LIFE"/>
    </div>
    <div className="container">
     <MenuLists6 titel="Duo Life" button1="Menu 26 pièces " button2="Menu 38 pièces " button3="Menu 44 pièces "  />
    </div>
    <div className="container">
     <MenuLists titel="Individuel" button1="GREEN ROLL(x6)" button2="SUSHI(x2)"button3="CRISPY(x6)" button4="CALIFORNIA(x6)" button5="GUNKAN(x6)" />
    </div>
    <div className="container">
     <MenuLists8 titel="Signature(x8)" button1="DRAGON ROLL" button2="DRAGON ROLL" button3="DRAGON SALMON"button4="DRAGON COLOR"  />
    </div>
    <div className="container">
     <MenuLists9 titel="Midi Life & Su-zza life" button1="SPICY LIFE" button2="SAUMON LIFE" button3="SU-ZZA LIFE" />
    </div>
    <div className="container">
     <MenuLists7 titel="Individuel" button1="BIOSSONS" button2="DESSERTS" />
    </div>
    <div className="container">
     <MenuLists4 titel="Solo Life" button1="LIGHT LIFE" button2="YAKITORI LIFE" button3="CHEESE LIFE" button4="SUSHI LIFE" />
    </div>

   
   
    {/* <Footer/> */}
    </>
  )
}
