import React, { useEffect, useRef, useState } from 'react'
import css from './Search.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// serac---bar
const Search_bar = ({ uu }) => {

  const find = useNavigate();
  const icone = useRef();
  const to = useRef();
  const from = useRef();
  const [lat_lon, setgeo] = useState({});
  const current_date = useRef();
  const rd = useRef();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((p) => {

      setgeo({ lat: p.coords.latitude, lon: p.coords.longitude });

    })

  }
  else {
    alert("user browser is not sutable fot this");
  }
  //  --------------------





  async function geo_get() {

    try {
      const ans = await axios("https://api.openweathermap.org/geo/1.0/reverse?lat=" + lat_lon.lat + "&lon=" + lat_lon.lon + "&appid=f8156af945bf59e720cefff0212c48e6");
      to.current.value = ans.data[0].name;
    } catch (error) {
      console.log(error);
    }

  }

  // useEffect(()=>{
  //   geo_get();
  // },[])

  // -----------------//

  const move = () => {

    if (to.current.value != "" && from.current.value != "" && (!/[^a-zA-Z]/.test(to.current.value)) && !/[^a-zA-Z]/.test(from.current.value)) {
      icone.current.classList.add("move");
      setTimeout(() => {
        icone.current.classList.remove("move");
      }, 500)
      // --------------
      const frome = to.current.value;
      to.current.value = from.current.value;
      from.current.value = frome;
    }

  }



  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const mounth = d.getMonth() + 1;
    const date = d.getDate();
    const set_current_date = `${year}-${mounth > 9 ? mounth : ("0" + mounth)}-${date}`;
    current_date.current.value = set_current_date;





  }, [])


  function datacall() {
    if (to.current.value != "" & from.current.value != "" & current_date.current.value != "" & rd.current.value != "") {

      find("/find")
      uu({
        from: to.current.value,
        to: from.current.value,
        cdd: current_date.current.value,
        rdd: rd.current.value
      })
    }
  }


  return (
    <>
      <div className={css.Search_bar}>
        <div className={css.Search_menu}>
          <section>
            <nav className={css.first_box} >
              <p>SOURCE</p>
              <div className={css.input}>
                <i onClick={geo_get} style={{ fontSize: "18px" }} className="fa-solid fa-location-dot"></i>
                <input ref={to} type="text" placeholder='To' />
              </div>
            </nav>
            <i ref={icone} onClick={move} className="fa-solid fa-arrows-rotate" ></i>
          </section>
          {/* 2 */}
          <section>
            <nav style={{ width: "90%" }} className={css.first_box} >
              <p>DESTINATION</p>
              <div className={css.input}>
                <i style={{ fontSize: "18px" }} className="fa-solid fa-location-dot"></i>
                <input ref={from} type="text" placeholder='From' />
              </div>
            </nav>
          </section>
          {/* 3 */}
          <section>

            <nav style={{ width: "90%" }} className={css.first_box} >
              <p>DATE</p>
              <div className={css.input}>
                <input ref={current_date} type="date" />
              </div>
            </nav>
          </section>
          {/* 4 */}
          <section>
            <nav style={{ width: "90%" }} className={css.first_box} >
              <p>RETURN DATE</p>
              <div className={css.input}>
                <input ref={rd} type="date" />
              </div>
            </nav>
          </section>
          <section onClick={() => { datacall() }}>
            <h1>SEARCH</h1>
          </section>

        </div>
      </div>

    </>
  )
}
// first block
const Search = ({ u }) => {





  return (
    <>
      <div className={css.main}>

        <div className={css.image}>
          <h1>Take a bus to anywhere in the world</h1>

        </div>

        <div className={css.cads}>

          <div className={css.cards1}>
            <img src="https://st.redbus.in/Images/rdc/adv1.svg" alt="poster" />
            <div className={css.text}>
              <h1>Worldwide coverage</h1>
              <p>Find affordable travel tickets across the world, all at one place</p>
            </div>
          </div>

          <div className={css.cards1}>
            <img src="https://st.redbus.in/Images/rdc/Anxiety-free%20travel.svg" alt="poster" />
            <div className={css.text}>
              <h1>Anxiety-free travel</h1>
              <p className={css.test1}>We ensure your information is safe and your travel is hassle free, wherever you go</p>
            </div>
          </div>

          <div className={css.cards1}>
            <img src="https://st.redbus.in/Images/rdc/No%20hidden%20charges@3x%201.svg" alt="poster" />
            <div className={css.text}>
              <h1>No hidden charges</h1>
              <p>Find the best deals online and guess what, refunds are simple!</p>
            </div>
          </div>


        </div>

        <Search_bar uu={u} />

      </div>
    </>
  )
}

export default Search
export { Search_bar };