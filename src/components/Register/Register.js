import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>  Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your Email" />
                <br /><br />
                <input type="password" name=""placeholder="Enter your password" id="" />
                <br />
                <br />
                <input type="password" name=""placeholder="Re-Password" id="" />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
                <p>Already have an account?<Link to="/login">Login</Link></p>
                <div>-------or-------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;