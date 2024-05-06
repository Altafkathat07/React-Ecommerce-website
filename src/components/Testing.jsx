import React, { useState } from 'react';
import ObContent1 from './ProductObj';
import ObContent2 from './ProductObj2';
import ObContent3 from './productObj3';
import ObContent4 from './productObj4';
import ObContent5 from './productObj5';
import ObContent6 from './productObj6';
import DishCom from './DishCom';

function Testing(props) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const buttonLabels = props.buttons;

  // Define menuContents above selectedContent
  const menuContents = [ObContent1, ObContent2, ObContent3, ObContent4, ObContent5, ObContent6];

  // Ensure selectedContent is defined with a default value
  const selectedContent = menuContents[selectedButton] ?? [];

  return (
    <>
      <section className="section-padding rs-menu-style">
        <div className="container-fluid custom-container px-0 mx-0">
          <div className="section-header">
            <div className="section-heading">
              <h3 className="text-brown fw-700">{props.title}</h3>
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
                      <a
                        href="/"
                        className="nav-link text-brown"
                        data-toggle="tab"
                        onClick={() => handleButtonClick(index)}
                      >
                        {button}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="btn-wrp">
                  <a href="/" className="theme-btn btn-style-2">View all<span></span></a>
                </div>
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
      </section>
    </>
  );
}

export default Testing;
