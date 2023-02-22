import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Last from '../../component/last/Last';
import css from './airport_page.module.css';
import d from './down.png'
import u from './up.png'

const mounth = ["JAN", "FEB", "MAR", "APRI", "MAY", "JUN", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];


const Main_airport = () => {
  const Return_main = useNavigate();
  const [show, set_show] = useState(true);
  const [show1, set_show1] = useState(false);
  const [dates, set_dates] = useState({});
  const pick = useRef();
  const drop = useRef();
  const box_pick = useRef();
  const box_drop = useRef();
  const [pic, set_pic] = useState(false);
  const [drp, set_drp] = useState(false);
  const [picdata, set_pic_data] = useState("");
  const [drpdata, set_drp_data] = useState("");
  const focuspic = useRef();
  const focusdrp = useRef();




  const date = new Date();

  useEffect(() => {
    set_dates({
      d: date.getDate(),
      m: mounth[date.getMonth()],
      y: date.getFullYear()
    })
  }, [])

  const current_date = (val) => {
    if (val === "t") {
      set_dates({
        d: date.getDate(),
        m: mounth[date.getMonth()],
        y: date.getFullYear()
      })
    }
    else {
      set_dates({
        d: date.getDate() + 1,
        m: mounth[date.getMonth()],
        y: date.getFullYear()
      })
    }
  }


  function valid() {
    if (pick.current.innerHTML == "PICK POINT" || drop.current.innerHTML == "DROP POINT") {
      if (pick.current.innerHTML == "PICK POINT" && drop.current.innerHTML == "DROP POINT") {
        box_drop.current.style.border = "2px solid red";
        box_pick.current.style.border = "2px solid red";
      }
      else if (pick.current.innerHTML == "PICK POINT") {
        box_pick.current.style.border = "2px solid red";
      }
      else if (drop.current.innerHTML == "DROP POINT") {
        box_drop.current.style.border = "2px solid red";
      }

    }

    else {

    }

  }





  // ==================================================//
  // focuse


  if (pic) {
    setTimeout(() => {

      focuspic.current.focus();
      // console.log(focuspic.current)
    }, 100)

  }
  if (drp) {


    setTimeout(() => {

      focusdrp.current.focus();
      // console.log(focuspic.current)
    }, 100)

  }


  return (
    <>
      <div className={css.main}>

        <div className={css.first}>
          <div className={css.fome}>

            <div className={css.box1} >

              <section className={css.rows1}>
                <i onClick={() => { Return_main("/") }} className="fa-solid fa-less-than"></i>
                <p>Find Airport Transfer Shuttle Buses</p>
              </section>

              <section className={css.rows2}>

                <div onClick={
                  () => {

                    set_show((p) => !p)
                    if (show1 == true) {
                      set_show1((p) => !p)
                    }

                  }

                } className={`${css.btn1} ${show ? css.sade : null}`}>
                  <section >{show ? <nav></nav> : null} </section>
                  <p>From Airport</p>
                </div>

                <div onClick={
                  () => {
                    set_show1((p) => !p)
                    if (show == true) {
                      set_show((p) => !p)
                    }
                  }
                } className={`${css.btn2} ${show1 ? css.sade : null}`}>
                  <section> {show1 ? <nav></nav> : null}</section>
                  <p>To Airport</p>
                </div>

              </section>

              <section className={css.rows3}>
                <nav className={css.arrow}>

                  {show ? <img className={css.ar2} src={d} alt="" /> : <img className={css.ar2} src={u} alt="" />}

                </nav>

                <div>


                  <nav onClick={() => set_pic((p) => !p)} ref={box_pick}>
                    <i className="fa-solid fa-plane-departure"></i>
                    <p ref={pick}> {picdata != "" ? picdata : "PICK POINT"}</p>
                  </nav>

                  <nav onClick={() => set_drp((p) => !p)} ref={box_drop}>
                    <i className="fa-solid fa-bus"></i>
                    <p ref={drop}> {drpdata != "" ? drpdata : (show1 ? "BOARD POINT" : "DROP POINT")} </p>
                  </nav>
                  <nav>

                    <i className="fa-solid fa-calendar-days"></i>
                    <p> <b>{dates.d} {dates.m}</b> {dates.y}</p>
                    <p onClick={() => current_date("t")}>Today</p>
                    <p onClick={() => current_date("tow")}>Tomorrow</p>
                  </nav>


                </div>

                <div onClick={valid} className={css.sub}>

                  <p>SHOW BUSES</p>

                </div>

              </section>

              {pic ?
                <nav className={css.p}>

                  <div className={css.pick_first}>
                    <p>Select Airport</p>
                    <p onClick={() => set_pic((p) => !p)}>X</p>
                  </div>

                  <div className={css.pick_second}>

                    <nav className={css.search1}>

                      <i className="fa-solid fa-magnifying-glass"></i>

                      <input ref={focuspic} onChange={(e) => {
                        set_pic_data(e.target.value)
                      }} onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          set_pic((p) => !p)
                        }
                      }} type="text" placeholder="Enter Airport Name" />

                    </nav>

                  </div>

                </nav> : null

              }

              {drp ?
                <nav className={css.p}>

                  <div className={css.pick_first}>
                    <p>Select Drop point</p>
                    <p onClick={() => set_drp((p) => !p)}>X</p>
                  </div>

                  <div className={css.pick_second}>

                    <nav className={css.search1}>

                      <i className="fa-solid fa-magnifying-glass"></i>

                      <input ref={focusdrp} onChange={(e) => {
                        set_drp_data(e.target.value)
                      }} onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          set_drp((p) => !p)
                        }
                      }
                      }

                        type="text" placeholder="Enter area on City Name" />

                    </nav>

                  </div>

                </nav> : null

              }

            </div>


          </div>


          <div className={css.list}>

            <div>
              <h2>Introducing</h2>
              <h1>Airport Transfers</h1>
            </div>

            <div>

              <nav className={css.info_card}>
                <img src="https://st.redbus.in/Images/rdc/AirportOne.svg" alt="poster" />
                <p>Low Cost Airport Transfer.</p>
              </nav>

            </div>

            <div>
              <nav className={css.info_card}>
                <img src="https://st.redbus.in/Images/rdc/AirportTwo.svg" alt="poster" />
                <p>Flexible date and time changes</p>
              </nav>
            </div>

            <div>
              <nav className={css.info_card}>
                <img src="https://st.redbus.in/Images/rdc/AirportThree.svg" alt="poster" />
                <p>Friendly and responsive customer service.</p>
              </nav>
            </div>

            <div>
              <nav className={css.info_card}>
                <img src="https://st.redbus.in/Images/rdc/AirportFour.svg" alt="poster" />
                <p>Skip the Queues.</p>
              </nav>
            </div>

          </div>

        </div>

        <Last />



      </div>
    </>
  )
}

export default Main_airport;





