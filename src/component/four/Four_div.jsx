import React from 'react'
import css from './Four.module.css';
const Card = ({ place, imgp }) => {

    return (
        <>
            <div className={css.main_card}>
                <section className={css.image}>
                    <img src={imgp} alt="poster" />
                </section>
                <p className={css.from}>Buses from</p>
                <h1 className={css.city}>{place}</h1>
            </div>
        </>
    )
}

const Four_div = () => {

    const images = ["https://t3.ftcdn.net/jpg/04/08/25/22/240_F_408252208_MKyckVSMchKhJGfrS019iQ6rsV5y7qTK.jpg", "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/master/pass/GettyImages-539105384.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUJEzOKOqYn4ccruR-xjOrh2UG6fnVDRPS7Is68SqlKTG2LtYtfTGOsa3oFsYSZCNY1M&usqp=CAU", "https://thetravelshots.com/wp-content/uploads/2020/09/Vaishno-Devi-1-768x428.jpg", "https://img.itinari.com/pages/images/original/79c61d99-04b0-4fb4-a468-a6e79fd8002c-istock-485422676.jpg?ch=DPR&dpr=2.625&w=1600&s=8bb13dd7bd9e3c3868571a1c1d8c717f", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYY7KPz-yHmAWedT3VS9hPOgVfppxvNCAru8OEGy6Tt8e8Yl2ZRjc3L4afjUwkm7qixjI&usqp=CAU"];
    const area = ["Delhi to Banarash", "Ranchi to Kedarnath", "Kolkata to Rameshwaram", "Aagra to Katra", "Patna to Jammu & Kashmir", "Bengaluru to Gaya"];

    return (

        <>
            <div className={css.main}>

                <h1>Top Travelled Bus Routes</h1>

                <nav className={css.first}>
                    <Card place={area[0]} imgp={images[0]} />
                    <Card place={area[1]} imgp={images[1]} />
                    <Card place={area[2]} imgp={images[2]} />
                </nav>

                <nav className={css.second}>
                    <Card place={area[3]} imgp={images[3]} />
                    <Card place={area[4]} imgp={images[4]} />
                    <Card place={area[5]} imgp={images[5]} />
                </nav>



            </div>
        </>
    )

}

export default Four_div