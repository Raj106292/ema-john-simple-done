import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Signup.css'

const Signup = () => {

    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('password must contain minimum 6 character');
            return;
        }
        if (password !== confirm) {
            setError('password did not matched');
            return;
        }

        createUser(email, password)
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

        console.log(email, password, confirm);
    }

    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUpSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='enter your email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='enter password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' placeholder='enter password again' required />
                    </div>
                    <input className='btn-submit' type="submit" value='SignUp' />
                </form>
                <p className='view-error'><small>{error}</small></p>
                <p className='signup-link-container'><small>Already have an account? <Link className='signup-link' to='/login'>LogIn</Link></small></p>
            </div>
        </div>
    );
};

export default Signup;