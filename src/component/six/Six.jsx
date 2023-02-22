import React, { useEffect, useRef } from 'react'
import css from './six.module.css';

const Card=({comnt,name,rate})=>{
    return(
        <>
         <div className={css.di1}>
            
            <h1>{comnt}</h1>
           <div className={css.feedback}>
           <p>{name}</p>
           
            <div className={css.rating}>
            <i className="fa-solid fa-star"></i>
            {rate}
            </div>

           </div>
           <p className={css.since}>Blue bus Customer Since 2019</p>

          </div>
        </>
    )
}

const Six = () => {

  const fg=useRef();

 useEffect(()=>{
    let move=true;
    const time=setInterval(()=>{
       if(move)
       {
          fg.current.scrollLeft=1404;
       }
       else
       {
          fg.current.scrollLeft=0;
       }
       move=!move;
    },5000)

    return ()=>{
           clearInterval(time);
    }
 })
  

  return (
   <>
     <div className={css.main}>
        <h1 className={css.h12}>Here’s what a few of our customers have to say about us</h1>
        <nav ref={fg} className={css.comments}>
       <Card  comnt={"Bus was clean"} name={"ram singh"} rate="4.0"/>
       <Card  comnt={"Travle expesieans awosome"} name={"Lakshman singh"} rate="5.0" />
       <Card  comnt={"comfrtable jourany"} name={"Mittal gupta"} rate="5.0" />
       <Card  comnt={"Price is minimal"} name={"Aditya gupta"} rate="5.0" />
       <Card  comnt={"Bus ride is not so easy"} name={"rishi pandit"} rate="4.0" />
       <Card  comnt={"Good bihabiar of tc"} name={"gaurav mishra"} rate="3.0" />
        </nav>
        
        </div>
  </>
  )
}

export default Six






