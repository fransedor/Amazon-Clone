import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        // firebase login
    } 
    const register = (e) => {
        e.preventDefault();

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
