import React, { useState } from 'react';
import MenuDisk from './MenuDisk';
import ProductMenu15 from './ProductMenu15'; 
import ProductMenu16 from './ProductMenu16'; 
import ProductMenu17 from './ProductMenu17'; 
import ProductMenu18 from './ProductMenu18'; 
 

export default function MenuLists8(props) {
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
    ProductMenu15,
    ProductMenu16,
    ProductMenu17,
    ProductMenu18
  
   
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
