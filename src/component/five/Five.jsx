import React from "react";
import css from './fiv.module.css'

const Five=()=>{

    return(
        <>
         <div className={css.main}>

            <h1 className={css.h11}>It’s all about travel</h1>
            <div className={css.div1}>
                <h2 style={{color:"gray",fontSize:"20px"}}>redBus is part of Makemytrip group which has been listed on <strong style={{color:"black",fontSize:"25px",fontWeight:"700"}}>NASDAQ since 2010</strong></h2>
                <img src="https://st.redbus.in/Images/rdc/Nasdaq_RDC.svg" alt="holding" />
            </div>
            <div className={css.div2}>
                <img src="https://st.redbus.in/Images/rdc/Partner.svg" alt="holding" />
                <h2 style={{color:"gray",fontSize:"20px"}}>We have two partner companies <strong style={{color:"black",fontSize:"25px",fontWeight:"700"}}>makemytrip.com and goibibo.com</strong></h2>
                </div>
            <div className={css.div3}>
            <h2 style={{color:"gray",fontSize:"20px"}}>Helping people book travel and accommodation for <strong style={{color:"black",fontSize:"25px",fontWeight:"700"}}>more than 20 years</strong></h2>
                <img src="https://st.redbus.in/Images/rdc/Twentyyrs.svg" alt="holding" />
            </div>

           </div>
        </>
    )
}
export default Five