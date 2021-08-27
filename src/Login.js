import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEYpFZM99UVO4c9n39M99cMqZV5fMc75k",
    authDomain: "clone-4ba78.firebaseapp.com",
    projectId: "clone-4ba78",
    storageBucket: "clone-4ba78.appspot.com",
    messagingSenderId: "240408715611",
    appId: "1:240408715611:web:c35bb759fa58cec0347a7e",
    measurementId: "G-MZF6W4FEL4"
  };

initializeApp(firebaseConfig);

getFirestore();

function Login() {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass) 
        .then((auth) => {
            // successfully login user
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message)) 
    }
              
    
    const register = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email,pass)
            .then((auth) => {
                // successfully create a new user
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // firebase register
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"  />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)}/>

                    <button type='submit' onClick={signIn} className="login__signIn">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__register">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
