import React, { useState } from 'react';
import css from './navbar.module.css';
import bus from './bus2.png';
import india from './india.png'
import { useNavigate } from 'react-router-dom';
const Navbar = ({ p, setp }) => {
  const login_navget = useNavigate();
  const [show, set_show] = useState(false);
  const [show1, set_show1] = useState(false);
  const [show2, set_show2] = useState(false);
  const [lang, set_lang] = useState("English");
  const curancy = ["USD", "EUR", "VND", "BGN", "MYR", "INR", "PEN", "COP", "GBP", "SGD", "THB", "AUD", "BRL", "IDR", "CLP"]



  function bhasha(e) {
    set_lang(e.target.innerText)

  }

  return (
    <div className={css.main}>

      <div className={css.icone}>
        <img src={bus} alt="" />
      </div>

      <div className={css.list}>
        <ul>
          <li> {lang === "English" ? "Help" : "मदद"}</li>
          <li onClick={() => {
            set_show((p) => !p)
            if (show1) {
              set_show1((p) => !p)


            }
            if (show2) {
              set_show2((p) => !p)
            }
          }
          }
          >  {lang === "English" ? "English" : "हिंदी"} {!show ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
            {
              show ? <nav className={css.country}>

                <div onClick={bhasha} > {lang === "Hindi" ? <i className="fa-solid fa-check"></i> : null} <p >Hindi</p> <img src={india} alt="" /> </div>
                <div onClick={bhasha} >{lang === "English" ? <i className="fa-solid fa-check"></i> : null}<p>English</p> <img src="https://www.redbus.com/images/US.webp" alt="" /></div>

              </nav> : null

            }
          </li>





          <li onClick={() => {
            set_show2((p) => !p)
            if (show1) {
              set_show1((p) => !p)


            }
            if (show) {
              set_show((p) => !p)
            }

          }
          }


          > {lang === "English" ? "INR" : "आईएनआर"}  {!show2 ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
            {
              show2 ? <nav className={css.country3}>

                {
                  curancy.map((e, i) => {
                    return (
                      <div><p>{e}</p></div>
                    )
                  })
                }

              </nav> : null

            }

          </li>




          <li onClick={() => {
            set_show1((p) => !p)

            if (show) {
              set_show((p) => !p)


            }
            if (show2) {
              set_show2((p) => !p)
            }
          }}


          > {lang === "English" ? " Manage Booking" : "बुकिंग की व्यवस्था"} {!show1 ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
            {show1 ?
              <nav className={css.country1}>

                <div><p>{lang === "English" ? "Cancle" : "रद्द"}</p></div>
                <div><p>{lang === "English" ? "Show my ticket" : "मेरा टिकट दिखाओ"}</p></div>
                <div><p>{lang === "English" ? "Email" : "ईमेल "}</p></div>

              </nav> : null
            }
          </li>

          {p == null ? <li onClick={() => {
            login_navget("/login")
          }} >{lang === "English" ? "Login" : "लॉग इन करें"}</li> : <li onDoubleClick={() => { setp(null) }} title='Logout' className={css.profile_user}><p><span>{p}</span></p></li>}


        </ul>
      </div>

    </div>
  )
}

export default Navbar