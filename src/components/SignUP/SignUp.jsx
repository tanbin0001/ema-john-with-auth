import React from 'react';

import './SignUp.css'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your email' id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Your password' id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Your password' id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p> <small>Already have an account? <Link to='/login'>Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;