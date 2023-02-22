import React from 'react';
import css from './third.module.css';
const Third = () => {
  return (
    <div className={css.main}>

        <h1>Book your journey now with the world's largest bus platform</h1>
        <div className={css.cards}>

            <nav className={css.nav1}>     
            <img src="https://st.redbus.in/Images/rdc/36million.svg" alt="" />
            <h1>36 Million</h1>
            <p>Happy customers globally</p>
            </nav>
            {/* 2 */}
            <nav className={css.nav1}>     
            <img src="https://st.redbus.in/Images/rdc/3500worldwide.svg" alt="" />
            <h1>Over 3500</h1>
            <p>bus companies worldwide</p>
            </nav>
            {/* 3 */}
            <nav className={css.nav1}>     
            <img src="https://st.redbus.in/Images/rdc/100000-booked-perday.svg" alt="" />
            <h1>100,000+</h1>
            <p>tickets booking everyday</p>
            </nav>

            
        </div>

    </div>
  )
}

export default Third