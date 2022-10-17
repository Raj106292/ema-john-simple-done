import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Heading.css'

const Heading = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <nav className='navigation'>
            <img src={logo} alt="" />
            <div className='option'>
                {user?.email && <span className='user-data'>{user?.email}</span>}
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/shop">
                    Shop
                </NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user?.uid ?
                        <button className='btn-logout' onClick={handleLogOut}>Sign Out</button>
                        :
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Signup</NavLink>
                        </>

                }
            </div>
        </nav>
    );
};

export default Heading;