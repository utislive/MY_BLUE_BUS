import React from 'react';
import css from './airport.module.css';
import { useNavigate } from "react-router-dom";

const Airport = () => {
    const airport_navget= useNavigate();
  return (
    <>
    <div className={css.main}>
        <img className={css.photo} src="https://st.redbus.in/Images/rdc/AirportHome.svg" alt="" />
         <div className={css.div1}>
            
            <h3>INTRODUCING</h3>
            <h1>AIRPORT TRANSFERS</h1>
            <p>You can travel low cost airport shuttles, trains & bus to and from your accomodation</p>

            </div>
         <div className={css.div2}>
            
            <div onClick={()=>{
                airport_navget("/Airport_page")
            }} className={css.btn}>
                <p>BOOK NOW</p>
            </div>
            
            </div>
    </div>
    </>
    
  )
}

export default Airport