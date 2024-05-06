import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DishCom from './DishCom';
import ObContent1 from './ProductObj';
import ObContent2 from './ProductObj2';
import ObContent3 from './productObj3';
import ObContent4 from './productObj4';
import ObContent5 from './productObj5';
// import ObContent6 from './productObj6';
// import ObContent7 from './productObj7';
// import ObContent8 from './porductObj8';
// import ObContent9 from './porductObj9';
// import ObContent10 from './porductObj10';
// import ObContent11 from './porductObj11';
// import ObContent12 from './porductObj12';

export default function TodayMenu(props) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const buttonLabels = [
    props.button1,
    props.button2,
    props.button3,
    props.button4,
    props.button5
    // props.button6
  ];

  // Define an array of content sources
  const menuContents = [
    ObContent1,
    ObContent2,
    ObContent3,
    ObContent4,
    ObContent5
    // ObContent6
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
             
                <div className="btn-wrp">
                  <Link to="/menulists"><button className="theme-btn btn-style-2">View all<span></span></button></Link>
                </div>
              </div>
            </div>
            <div className="tab-content">
              {selectedContent.map((val, index) => (
                <DishCom
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
