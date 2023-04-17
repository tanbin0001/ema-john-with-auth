import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);

            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your email' id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Your password' id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p> <small>New to Ema-john?  <Link to='/signup'>Sign Up</Link></small></p>
        </div>
    );
};

export default Login;