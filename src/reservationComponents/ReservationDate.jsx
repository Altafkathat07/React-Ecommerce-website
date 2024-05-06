import React, { useState } from 'react'

export default function ReservationDate() {
    const [Number, setNumber]=useState(1);
    const Add=() =>{
        setNumber(Number+1);
    }
    const Less=() =>{
        setNumber(Number-1);
        (Number===0)?setNumber(Number-0):setNumber(Number-1)
    }

    const [Number2, setNumber2]=useState(1);
    const Add2=() =>{
        setNumber2(Number2+1);
    }
    const Less2=() =>{
        setNumber2(Number2-1);
        (Number2===0)?setNumber2(Number2-0):setNumber2(Number2-1)
    }
  

  return (
    <>
        <section className="section-padding bg-brown reservation-page">
        <div className="container">
            <div className="section-header">
                <div className="section-heading">
                    <h3 className="text-custom-white fw-700">COME AS YOU ARE AND WE WILL TAKE CARE OF THE REST</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <ul className="custom-flex justify-content-center mb-xl-80">
                        <li className="mb-sm-30">
                            <label className="text-custom-white" >Arrival</label>
                            <div className="date-box">
                                <span className="date"><input type="text" id="input1" name="date-fild" className="start-date" value="19/03/2022" placeholder="DD/MM/YYYY" readOnly /></span>
                                <span className="arrow"></span>
                            </div>
                        </li>
                        <li className="mb-sm-30">
                            <label className="text-custom-white">Departure</label>
                            <div className="date-box">
                                <span className="date"><input type="text" id="input2" name="date-fild"   className="end-date" value="19/03/2022" placeholder="DD/MM/YYYY" readOnly /></span>
                                <span className="arrow"></span>
                            </div>
                        </li>
                        <li>
                            <label className="text-custom-white">Adult</label>
                            <div className="quantity">
                                <button id="but1" className="minus-btn" type="button" name="button" onClick={Less2}> <i className="bi bi-dash"></i>
                                </button>
                                <h3 className='numStyle'>{Number2}</h3>
                                <button id="but1" className="plus-btn" type="button" name="button" onClick={Add2}> <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </li>
                        <li>
                            <label className="text-custom-white">Children</label>
                            <div className="quantity">
                                <button id="but1" className="minus-btn" type="button" name="button" onClick={Less}> <i className="bi bi-dash"></i>
                                </button>
                                 <h3 className='numStyle'>{Number}</h3>
                                <button id="but1" className="plus-btn" type="button" name="button"  onClick={Add}> <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <button type="submit" className="theme-btn btn-style-2">Check Availability<span></span></button>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
