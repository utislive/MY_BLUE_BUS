import React, { useRef, useState } from 'react'
import css1 from './login.module.css'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';





const firebaseConfig = {
    apiKey: "AIzaSyBYIJaZPLLGTzrL9URhuA7CJcUWzMvNvlo",
    authDomain: "react-blue-bus-clone.firebaseapp.com",
    projectId: "react-blue-bus-clone",
    storageBucket: "react-blue-bus-clone.appspot.com",
    messagingSenderId: "24963803132",
    appId: "1:24963803132:web:1698a8ecc8311a466ab479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);











const Login = ({ profile1 }) => {

    const [change, set_change] = useState(true);
    const [ex, set_ex] = useState(true);
    const email = useRef();
    const pass = useRef();
    const nav = useNavigate();
    const email1 = useRef();
    const pass1 = useRef();

    const [error, set_error] = useState("");

    const [alret, seta] = useState("");





    async function singup(Email, password) {




        try {
            const res = await createUserWithEmailAndPassword(auth, Email, password);
            return res;
        }
        catch (err) {



            let err1 = err.message.split(".");
            let arr2 = err1[0].split(":");
            set_error(arr2[1]);



        }

    }



    async function singin(Email, password) {






        try {
            const rers = await signInWithEmailAndPassword(auth, Email, password);
            return rers;
        }
        catch (err) {


            let err_arr = err.message.split(".");
            let arr_err2 = err_arr[0].split(" ");
            let arr_f = arr_err2[2].split("/");
            const error_message = arr_f[1].substring(0, arr_f[1].length - 1)
            set_error(error_message);
        }



    }










    function abc_all() {


        if (email.current.value != "" && pass.current.value != "") {


            const result = singup(email.current.value, pass.current.value);
            result.then((data) => {
                console.log(data)
                if (data) {

                    set_ex((p) => !p);
                    set_error("");

                }
            })

        }







    }




    function abc_all1() {

        if (email1.current.value != "" && pass1.current.value != "") {
            const result = singin(email1.current.value, pass1.current.value);
            result.then((data) => {

                if (data) {
                    //  console.log(data["_tokenResponse"].email);
                    const user = data["_tokenResponse"].email;

                    const rrr = user.split("");
                    profile1(rrr[0].toUpperCase())
                    console.log(rrr[0].toUpperCase());

                    nav("/");

                }

            })
        }

    }








    return (
        <>

            <div className={css1.main}>

                {error != "" ? <p className={css1.problem}>{error}</p> : null}

                {ex ?
                    <div className={css1.card}>

                        <h1>Log in</h1>
                        <input ref={email1} type={"email"} placeholder='Email' />
                        <input ref={pass1} maxLength="16" onDoubleClick={() => set_change((p) => !p)} type={change ? "password" : "text"} placeholder='Password' />
                        <div onClick={abc_all1}><p>Log in</p></div>
                        <p onClick={() => set_ex((p) => !p)}>Or,Sing up</p>
                    </div> :
                    <section className={css1.card1}>
                        <h1 className={css1.textx}>Sing up</h1>
                        <input ref={email} type={"email"} placeholder='Email' />
                        <input ref={pass} maxLength="16" onDoubleClick={() => set_change((p) => !p)} type={change ? "password" : "text"} placeholder='Password' />
                        <div className={css1.btn} onClick={abc_all}><p>Sing up</p></div>
                        <p onClick={() => set_ex((p) => !p)}>Or,Log in</p>
                    </section>
                }



            </div>
        </>
    )
}

export default Login