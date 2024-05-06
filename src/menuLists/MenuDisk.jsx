import React from 'react';
import Egg from '../assets/images/egg.svg';
// import Milk from '../assets/images/milk.svg';
// import Fish from '../assets/images/fish.svg';

export default function MenuDisk(props) {
    
  return (
    <>
    <div className="tab-pane fade active show" id="appetizers">
                        <div className="row no-margin">
                            <div className="col-12 rs-menu">
                                <div className="rs-menu-list">
                                    <div className="menu-pro">
                                        <h4>{props.name}</h4>
                                        {/* <p>Served with red peppers and kalamata olives salad and aioli. PAIRING : White or IPA</p> */}
                                    </div>
                                    <div className="menu-pro-right">
                                        <div className="pro-icon">
                                            <div className="icon-box">
                                                <img src={Egg} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="pro-price">
                                            <h6 className="text-brown fw-500 no-margin bebas price">{props.price}<sup>$</sup></h6>
                                        </div>
                                        <div className="pro-cart">
                                            <button className="add-to-cart">Quick View</button>
                                            <button className="add-to-cart btn-style-2">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
      
    </>
  )
}
