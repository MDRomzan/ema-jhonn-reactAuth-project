import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./login.css"
const Login = () => {

   const {signInUsingGoogle}=useAuth();
   const location=useLocation();
   const history=useHistory();
   const redirect_url=location.state?.from ||"/shop"
   

   const handleGoogleLogin=()=>{
        signInUsingGoogle()
         .then(result => {
             history.push(redirect_url);
         })
   }
    return (
        <div className="login-form">
            <div className="">
                <h2 className="">Login</h2>
                <form  >
                    <input type="email" name="" placeholder="Enter your Email" value="" id="" />
                    <br />
                    <br />
                    <input placeholder="Enter your password" type="password" name="" value="" />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john?
                <Link to="/register">Account</Link></p>
                <div>------or--------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
        
    );
};

export default Login;