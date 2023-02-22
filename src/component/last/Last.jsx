import React from 'react'
import css from './last.module.css'
import bus from './bus2.png'
import { Link } from 'react-router-dom'
const Last = () => {




   return (

      <>


         <div className={css.main}>
            <p className={css.setr}>Self Service Pvt.ltd</p>
            <div className={css.first}>
               <img src={bus} alt="tag" />
               <p>BlueBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. BlueBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</p>
               <div className={css.icones}>
                  <nav><a href="#"><i className="fa-brands fa-facebook"></i></a></nav>
                  <nav><a href="#"><i className="fa-brands fa-instagram"></i></a></nav>
                  <nav><a href="#"><i className="fa-brands fa-twitter"></i></a></nav>
               </div>
            </div>

            <div className={css.second}>
               <div>
                  <p>About redBus</p>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Mobile Version</p>
               </div>
               <div>
                  <p>Info</p>
                  <p>T&C</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                  <p>FAQ</p>
                  <p>Blog</p>
               </div>
               <div>
                  <p>Global Sites</p>
                  <p>India</p>
                  <p>Singapore</p>
                  <p>Malaysia</p>
                  <p>Indonesia</p>
                  <p>Peru</p>
                  <p>Colombia</p>
               </div>
               <div>
                  <p>Our Partners</p>
                  <p>Goibibo</p>
                  <p>Makemytrip</p>
               </div>

            </div>

         </div>
      </>
   )
}




export default Last