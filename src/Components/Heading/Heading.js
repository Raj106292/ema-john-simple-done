import React from 'react';
import logo from '../../images/Logo.svg'
import './Heading.css'

const Heading = () => {
    return (
        <nav className='navigation'>
            <img src={logo} alt="" />
            <div className='option'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Heading;