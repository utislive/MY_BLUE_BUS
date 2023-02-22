import react from "react";
import { useNavigate } from "react-router-dom";
import css from './seven.module.css';

const Seven=()=>{
    const konw_more=useNavigate();
    
    const tieups=["https://st.redbus.in/Images/rdc/megabus.png","https://st.redbus.in/Images/rdc/alsa.png","https://st.redbus.in/Images/rdc/nationalexp.png","https://st.redbus.in/Images/rdc/Infobus.png","https://st.redbus.in/Images/rdc/Regiojet.png","https://st.redbus.in/Images/rdc/Avanza.png","https://st.redbus.in/Images/rdc/IC-LogoHorizontal2x-min-1611241993%201.png","https://st.redbus.in/Images/rdc/logo-zingbus%201.png","https://st.redbus.in/Images/rdc/logo%201.png","https://st.redbus.in/Images/rdc/640px-Logo_BlaBlaBus_-_2019%201.png","https://st.redbus.in/Images/rdc/logo%202.png","https://st.redbus.in/Images/rdc/logo_sindbad_hr-poziom%201.png"];
    

    return (
        <>
        <div className={css.main}>

          <div className={css.one}>

           <div className={css.text}>
            <h1>We’ve partnered with the world’s best bus companies</h1>
            <p>More than 3500 trusted travel partners across trains, busses, ferries and airport transfers</p>
           </div>

           <div className={css.image}>
             {
                tieups.map((e,i)=>{
                    return(
                        <img key={i} src={e} alt="" />
                    )
                })
             }
           </div>

          </div>

          <div className={css.two}></div>

          <div className={css.three}>
               <h1>We are about bus travel</h1>
               <p>Bluebus is the best platform in the world for booking bus
                 tickets online. Bluebus is serving 6 countries around the world
                  (India, Malaysia, Singapore, Indonesia, Peru, and Colombia), and would be launching bus 
                  ticket booking services in more countries. Trusted by over 18 million customers worldwide, 
                  Bluebus offers an easy, fast, and secure platform for booking cheap bus tickets. You only need
                   to select your origin, destination, and date of departure, and you will find plenty of buses
                    to travel by within a few seconds. You can book bus based on your preferred schedule, choose 
                    a pick-up and dropping point, preferred bus type, and book a bus ticket online with just a few
                     clicks!</p>
               <p>Bluebus operates on over 7000 routes and has on-boarded over 2,300 bus operators globally. 
                In addition to bus tickets booking for popular tourist destinations, one can also book cheap bus tickets to the remote and less popular places in India, Malaysia, Singapore, Indonesia, Peru, and Colombia through Bluebus. Bluebus has sold over 180 million tickets globally through its website and mobile app, ensuring hassle-free and memorable experience for booking bus tickets online.</p>


          </div>

          <div className={css.four}>

           <div className={css.box}>
              <div className={css.imge}>
              <img src="https://st.Redbus.in/Images/rdc/A%20new%20way%20of%20travelling@3x%201.svg" alt="avtar" />
              </div>
              <div className={css.text1}>
                <h1>A new way of travelling</h1>
                <p>Stay up to date with the latest tips on navigating travel during COVID-19, based on your location</p>
              </div>
              <div onClick={()=>konw_more("/konw_more")} className={css.btn}>
                <p>KNOW MORE</p>
              </div>

            <div className={css.abs}></div>
           </div>

          </div>

        </div>
        </>
    )
    
}

export default Seven;