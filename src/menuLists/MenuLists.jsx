import React, { useState } from 'react';
import MenuDisk from './MenuDisk';
import ProductMenu1 from './ProductMenu1';
import ProductMenu2 from './ProductMenu2';
import ProductMenu3 from './ProductMenu3';
import ProductMenu4 from './ProductMenu4';
import ProductMenu5 from './ProductMenu5';
import ProductMenu6 from './ProductMenu6';
import ProductMenu7 from './ProductMenu7';
import ProductMenu8 from './ProductMenu8';
import ProductMenu9 from './ProductMenu9';

export default function MenuLists(props) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const buttonLabels = [
    props.button1,
    props.button2,
    props.button3,
    props.button4,
    props.button5,
    props.button6,
    props.button7,
    props.button8,
    props.button9
  ];

  // Define an array of content sources
  const menuContents = [
    ProductMenu1,
    ProductMenu2,
    ProductMenu3,
    ProductMenu4,
    ProductMenu5,
    ProductMenu6,
    ProductMenu7,
    ProductMenu8,
    ProductMenu9

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
