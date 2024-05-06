import React, { useState } from 'react';
import MenuDisk from './MenuDisk';
// import productObj6 from '../components/productObj6';
// import productObj7 from '../components/porductObj7';
// import productObj8 from '../components/porductObj8';
// import productObj9 from '../components/porductObj9';
import productObj10 from '../components/porductObj10';
import productObj11 from '../components/porductObj11';
import productObj12 from '../components/porductObj12';
import productObj13 from '../components/productObj13';

export default function MenuLists5(props) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const buttonLabels = [
    props.button1,
    props.button2,
    props.button3,
    props.button4
  ];

  // Define an array of content sources
  const menuContents = [
  
    productObj10,
    productObj11,
    productObj12,
    productObj13
   
  ];

  const selectedContent = menuContents[selectedButton] || [];

  return (
    <>
      <section className="section-padding rs-menu-style">
        <div className="container custom-container ">
          <div className="section-header">
            <div className="section-heading">
              <h3 className="text-brown fw-700">{props.titel}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="menu-heading theme-tabs">
             
                  <ul className="custom-flex nav nav-tabs">
                  {buttonLabels.map((button, index) => (
                    <li
                      key={index}
                      className={`nav-item anchor-animation second bebas butCon ${
                        selectedButton === index ? 'active' : ''
                      }`}
                    >
                      <button
                        className={`nav-link text-brown ${selectedButton === index ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                      >
                        {button}
                      </button>
                    </li>
                  ))}
                </ul>
             
              </div>
            </div>
            <div className="tab-content">
              {selectedContent.map((val, index) => (
                <MenuDisk
                  key={val.id}
                  name={val.name}
                  price={val.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
