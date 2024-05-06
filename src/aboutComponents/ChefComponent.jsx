import React from 'react';
import Chefimg1 from '../assets/images/t5.jpg';
import Chefimg2 from '../assets/images/t4.jpg';
import Chefimg3 from '../assets/images/t3.jpg';
import Chefimg4 from '../assets/images/t2.jpg';

export default function ChefComponent(props) {
  return (
    <>
      <ul className="custom-flex">
                        <li className="team-item">
                            <div className="img-box">
                                <img src={Chefimg1} className="image-fit rounded-circle" alt="img" />
                            </div>
                            <div className="team-content-box">
                                <h5>{props.Mam1}</h5>
                                <p className="no-margin">Kitchen member</p>
                            </div>
                        </li>
                        <li className="team-item">
                            <div className="img-box">
                                <img src={Chefimg2} className="image-fit rounded-circle" alt="img" />
                            </div>
                            <div className="team-content-box">
                                <h5>Anna Doe</h5>
                                <p className="no-margin">Kitchen member</p>
                            </div>
                        </li>
                        <li className="team-item">
                            <div className="img-box">
                                <img src={Chefimg3} className="image-fit rounded-circle" alt="img" />
                            </div>
                            <div className="team-content-box">
                                <h5>Hamza</h5>
                                <p className="no-margin">Kitchen member</p>
                            </div>
                        </li>
                        <li className="team-item">
                            <div className="img-box">
                                <img src={Chefimg4} className="image-fit rounded-circle" alt="img" />
                            </div>
                            <div className="team-content-box">
                                <h5>Anni Jhon</h5>
                                <p className="no-margin">Kitchen member</p>
                            </div>
                        </li>
                       
                    </ul>
      
    </>
  )
}
