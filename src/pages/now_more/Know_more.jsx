import { useEffect, useRef, useState } from 'react'
import react from 'react';
import css from './kon.module.css';
import anime from 'animejs/lib/anime.es.js';


const Know_more = () => {

  const ticket = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();

  useEffect(() => {

    anime({
      targets: ticket.current,
      innerHTML: [0, 100000],
      easing: 'linear',
      round: 10,
      duration: 1100


    });


    anime({
      targets: first.current,
      translateX: 500,
      delay: 300
    });


    anime({
      targets: second.current,
      translateX: 1000,
      delay: 400
    });

    anime({
      targets: third.current,
      translateY: 120,
      delay: 500
    });





  }, []);






  return (
    <>
      <div className={css.main}>


        <div className={css.first}>
          <div className={css.sub}>
            <p className={css.pp} ref={ticket}></p> <span>+</span>
            <p className={css.meass}>Tickets booked everyday</p>
          </div>

          <div className={css.info1}>
            <img src="https://s3.rdbuz.com/Images/safety/landing/buscertification.svg" alt="safety" />
            <div className={css.text}>
              <p>INTRODUCING SAFETY+</p>
              <p>With Safety+ we have brought in a set of measures to ensure you travel safely</p>
            </div>
          </div>

        </div>

        <div className={css.second}>
          <p className={css.line}>Passenger Guidelines</p>
          <div className={css.card}>
            {/* first */}
            <div style={{ zIndex: "1" }} className={css.safe_card}>
              <img src="https://s3.rdbuz.com/Images/safety/landing/guidelines/mandatorymasks.svg" alt="" />
              <div>
                <p>Mandatory masks</p>
                <p>Proper masks are mandatory for all passengers. Handkerchiefs /other cloth items are not permitted as masks..</p>
              </div>
            </div>
            {/* second */}
            <div ref={first} className={css.safe_card}>
              <img src="https://s3.rdbuz.com/Images/safety/landing/guidelines/travelwithsymptoms.svg" alt="" />
              <div>
                <p>Do not travel with Symptoms</p>
                <p>Passengers are advised to refrain from travel if they show Covid-19 Symptoms. In such an event, the passenger risks de-boarding.</p>
              </div>
            </div>
            {/* third */}
            <div ref={second} className={css.safe_card}>
              <img src="https://s3.rdbuz.com/Images/safety/landing/guidelines/carryyourownblanket.svg" alt="" />
              <div>
                <p>Carry your own Blankets</p>
                <p>In an effort to maintain utmost hygiene, you are requested to carry your own blankets and linens as we will not be providing these</p>
              </div>
            </div>
            {/* four */}
            <div ref={third} className={css.safe_card}>
              <img src="https://s3.rdbuz.com/Images/safety/landing/guidelines/inspection_of_passengers.svg" alt="" />
              <div>
                <p>Follow Mandatory Travel Guidelines</p>
                <p>It is mandatory to follow the travel guidelines of your source and destination state for travel.</p>
              </div>
            </div>

          </div>
        </div>



      </div>
    </>
  )



}

export default Know_more