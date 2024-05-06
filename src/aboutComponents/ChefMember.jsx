import React from 'react';
import StarSvg from '../assets/images/stars.svg';
import ChefComponent from './ChefComponent';



export default function ChefMember(props) {
  return (
    <>
          <section className="section-padding team-sec">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="menu-heading">
                         <h5 className="bebas"><span><span className="stars">
                             <img src={StarSvg} alt="icon" />
                         </span></span>Co-op Members</h5>
                     </div>
                </div>
                <div className="col-12">
                  <ChefComponent Mam1={'Jon Doe'} Mam2={'Anna Doe'} Mam3={'Hamza'} Mam4={'Anni Jhon'}/>
                  <ChefComponent Mam1={'Anna Smith'} Mam2={'Jon Doe'} Mam3={'Jhon Onson'} Mam4={'Jon Doe'}/>
                  <ChefComponent Mam1={'Jon Doe'} Mam2={'Anna Doe'} Mam3={'Hamza'} Mam4={'Anni Jhon'}/>
                  <ChefComponent Mam1={'Jon Doe'} Mam2={'Anna Doe'} Mam3={'Hamza'} Mam4={'Anni Jhon'}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
