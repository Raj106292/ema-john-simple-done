import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Heading.css'

const Heading = () => {
    return (
        <nav className='navigation'>
            <img src={logo} alt="" />
            <div className='option'>
                <NavLink
                className={({isActive}) => isActive ? 'active' : undefined}
                to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Heading;