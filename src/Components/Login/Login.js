import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css';

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogInSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogInSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='enter password' required />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p className='view-error'><small>{error}</small></p>
            <p className='signup-link-container'><small>New to Ema-john? <Link className='signup-link' to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;