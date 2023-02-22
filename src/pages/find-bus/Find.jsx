import React from "react";
import css from './find.module.css';


const Find = ({ data }) => {
    


    return (
        <>
            <div className={css.main}>
                <p>We apologize for the inconvenience, but the functionality you requested is currently unavailable due to limitations in our public transportation data sources. we will resolve as soon as possiable</p>
                <div className={css.card}>


                    <h1>😞sorry  here is your deatils</h1>

                    <nav>
                        <h3>source :</h3>
                        <span>{data.from}</span>
                    </nav>
                    <nav>
                        <h3>Destination :</h3>
                        <span>{data.to}</span>
                    </nav>

                    <nav>
                        <h3>Current date :</h3>
                        <span>{data.cdd}</span>
                    </nav>

                    <nav>
                        <h3>Return date :</h3>
                        <span>{data.rdd}</span>
                    </nav>

                </div>

            </div>
        </>
    )

}

export default Find